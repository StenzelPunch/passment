import { Request, Response, Router } from "express";
import { User, RefreshToken } from "../models";
import { loginSchema } from "../validation";
import {
  SuccessResponse,
  ErrorResponse,
  FailureResponse
} from "../models/response";
import { catchAsync } from "../middleware";
import { createToken } from "../utils/token";
import { MAX_SESSIONS } from "../config";
import { validate } from "../middleware/validation";
import logger from "../logger";
import { dropSessions } from "../utils/dropSessions";

const router = Router();

const getUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });

  if (!!user) {
    const validPass = await user.checkPassword(password);
    return validPass ? user : null;
  }

  return user;
};

const checkSessions = async (userId: string, email: string) => {
  const userSessions = await RefreshToken.find({ userId });

  if (userSessions.length >= +MAX_SESSIONS!) {
    logger.info(`User <${email}> have to many sessions`);
    dropSessions(userId);
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await getUser(email, password);

  if (!user) {
    res.status(422);
    return res.json(new FailureResponse("Bad credentials"));
  }

  await checkSessions(user.id, email);

  try {
    const token = await createToken(user, res);

    return res.json(
      new SuccessResponse("Successfully logged in", { token, user })
    );
  } catch (e) {
    return res.json(ErrorResponse);
  }
};

router.post(
  "/login",
  [validate(loginSchema)],
  catchAsync(async (req: Request, res: Response) => {
    await login(req, res);
  })
);

export default router;
