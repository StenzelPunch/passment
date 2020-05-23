import { Request, Response, Router } from "express";

import { RefreshToken } from "../models";
import { SuccessResponse, FailureResponse } from "../models/response";
import { catchAsync } from "../middleware";

const router = Router();

const logout = async (req: Request, res: Response) => {
  const { _rft } = req.cookies;

  if (!_rft) {
    res.status(401);
    return res.json(new FailureResponse("You are not logged in"));
  }

  await RefreshToken.findOneAndRemove({ token: _rft });

  res.clearCookie("_rft");

  return res.json(new SuccessResponse("Sucessfully logged out"));
};

router.post(
  "/logout",
  catchAsync(async (req: Request, res: Response) => {
    await logout(req, res);
  })
);

export default router;
