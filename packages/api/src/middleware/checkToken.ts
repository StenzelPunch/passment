import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/token";
import { JWT_SECRET } from "../config";
import { FailureResponse } from "../models";

export const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401);
    return res.json(new FailureResponse("You are not logged in"));
  }
  try {
    const tokenPayload = verifyToken(token, JWT_SECRET!);
    res.locals.tokenPayload = tokenPayload;
    return next();
  } catch (e) {
    res.status(401);
    return res.json(new FailureResponse(e.message));
  }
};
