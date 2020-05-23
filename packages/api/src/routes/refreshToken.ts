import { Request, Response, Router } from "express";
import { RefreshToken } from "../models";
import {
  SuccessResponse,
  ErrorResponse,
  FailureResponse
} from "../models/response";
import { catchAsync } from "../middleware";
import { createToken, TokenPayload, verifyToken } from "../utils/token";
import { JWT_REFRESH_SECRET } from "../config";
import logger from "../logger";

const router = Router();

const refresh = async (req: Request, res: Response) => {
  const { _rft } = req.cookies;

  if (!_rft) {
    res.status(401);
    return res.json(new FailureResponse("You are not logged in"));
  }

  try {
    const tokenPayload = verifyToken(_rft, JWT_REFRESH_SECRET!);

    //TODO: find way typing jwt
    const { id, email, role } = tokenPayload as TokenPayload;

    const dbRefreshToken = await RefreshToken.findOne({ token: _rft });

    if (!dbRefreshToken) {
      res.status(401);
      return res.json(new FailureResponse("Invalid token"));
    }

    const token = await createToken({ id, email, role }, res);

    try {
      await dbRefreshToken.remove();

      return res.json(
        new SuccessResponse("Token sucessfully refreshed", { token })
      );
    } catch (e) {
      logger.error("Something go wrong on token refresh", { dbRefreshToken });
      res.json(ErrorResponse);
    }
  } catch (e) {
    res.status(401);
    return res.json(new FailureResponse(e.message));
  }
};

router.post(
  "/refresh-token",
  catchAsync(async (req: Request, res: Response) => {
    await refresh(req, res);
  })
);

export default router;
