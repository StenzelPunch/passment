import { RequestHandler, Request, Response, NextFunction } from "express";
import logger from "../logger";

export const catchAsync = (handler: RequestHandler) => (
  ...args: [Request, Response, NextFunction]
) =>
  handler(...args).catch((e: Error) => {
    logger.error(e.message, args[0]);
    console.error(e.message, e.stack);
    return args[2];
  });
