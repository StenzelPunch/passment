import { Request, Response, Router, NextFunction } from "express";
import { v4 as uuid } from "uuid";
import { User, UserRoles } from "../models";
import { signupSchema } from "../validation";
import {
  SuccessResponse,
  FailureResponse,
  ErrorResponse
} from "../models/response";
import { catchAsync } from "../middleware";
import { createToken } from "../utils/token";
import logger from "../logger";
import { validate } from "../middleware/validation";

const router = Router();

const checkEmail = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.body.email;
  const user = await User.findOne({ email });

  if (user) {
    logger.info(`Tried to register an existing Email: <${email}>`);
    return res.json(new FailureResponse("Invalid email"));
  }

  return next();
};

const createUser = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  try {
    // TODO: migrate to typegoose??
    const user = await User.create({
      email,
      password,
      name,
      slug: uuid(),
      role: UserRoles.USER,
      premium: false,
      emailVerify: false,
      bio: ""
    });

    const token = await createToken(user, res);

    return res.json(new SuccessResponse("User created", { token, user }));
  } catch (e) {
    return res.json(ErrorResponse);
  }
};

router.post(
  "/signup",
  [checkEmail, validate(signupSchema)],
  catchAsync(async (req: Request, res: Response) => {
    await createUser(req, res);
  })
);

export default router;
