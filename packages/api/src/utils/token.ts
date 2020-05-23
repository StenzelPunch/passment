import jwt from "jsonwebtoken";
import {
  JWT_SECRET,
  JWT_REFRESH_SECRET,
  JWT_TTL,
  JWT_REFRESH_TTL
} from "../config";
import { RefreshToken, UserDocument } from "../models";
import { Response } from "express";

export interface TokenPayload {
  id: string;
  role: string;
  email: string;
  [key: string]: unknown;
}

export const createToken = async (
  user: UserDocument | TokenPayload,
  res: Response
) => {
  const payload = {
    id: user.id,
    role: user.role,
    email: user.email
  };

  const token = jwt.sign(payload, JWT_SECRET!, {
    expiresIn: +JWT_TTL! / 1000
  });

  const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET!, {
    expiresIn: +JWT_REFRESH_TTL! / 1000
  });

  await RefreshToken.create({ token: refreshToken, userId: payload.id });

  res.cookie("_rft", refreshToken, {
    maxAge: +JWT_REFRESH_TTL!,
    httpOnly: true
  });

  return token;
};

export const verifyToken = (token: string, secret: string) => {
  try {
    return jwt.verify(token, secret) as TokenPayload;
  } catch (e) {
    throw new Error(e.message);
  }
};
