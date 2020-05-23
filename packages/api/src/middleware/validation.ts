import { ObjectSchema } from "@hapi/joi";
import { Request, Response, NextFunction } from "express";
import { FailureResponse } from "../models";
import { formatErrorData } from "../validation";

export const validate = (schema: ObjectSchema) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await schema.validateAsync(req.body, {
      abortEarly: false
    });

    next();
  } catch (e) {
    if (e.details) {
      return res.json(
        new FailureResponse("Validation error", formatErrorData(e.details))
      );
    }
  }
};
