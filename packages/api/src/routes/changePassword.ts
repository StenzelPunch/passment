import { Request, Response, Router } from "express";
import { User } from "../models";
import { changePasword } from "../validation";
import { SuccessResponse, FailureResponse } from "../models/response";
import { catchAsync, checkToken } from "../middleware";
import { createToken } from "../utils/token";
import { validate } from "../middleware/validation";
import logger from "../logger";
import { dropSessions } from "../utils/dropSessions";

const router = Router();

const dropPassword = async (req: Request, res: Response) => {
  const { id } = res.locals.tokenPayload;
  const { oldPassword, password } = req.body;

  const user = await User.findById(id);

  if (!user) {
    res.status(404);
    logger.error("Did not found user in change password", { id });
    return res.json(new FailureResponse("User not found"));
  }

  const validPass = await user.checkPassword(oldPassword);

  if (!validPass) {
    res.status(401);
    return res.json(new FailureResponse("Bad credentials"));
  }

  await user.set({ password });
  await user.save();
  await dropSessions(id);

  const token = await createToken(user, res);

  return res.json(
    new SuccessResponse("Password successfully changed", { token })
  );
};

router.post(
  "/change-password",
  [checkToken, validate(changePasword)],
  catchAsync(async (req: Request, res: Response) => {
    await dropPassword(req, res);
  })
);

export default router;
