import mongoose from "mongoose";
import { Response, Request } from "express";
import logger from "./logger";
import { APP_PORT, MONGO_URI, MONGO_OPTIONS } from "./config";
import { createApp } from "./app";
import { FailureResponse } from "./models";

(async () => {
  await mongoose.connect(MONGO_URI, MONGO_OPTIONS);

  const app = createApp();

  app.use((_, res: Response) => {
    res.status(404).json(new FailureResponse("Not found"));
  });

  app.use((err: Error, _: Request, res: Response) => {
    logger.error(err.message, err.stack);
    res.status(500).json(new FailureResponse("Internal server error"));
  });

  app.listen(APP_PORT, () => {
    logger.debug(`App runing on localhost: ${APP_PORT}`);
  });
})();
