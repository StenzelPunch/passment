import mongoose from "mongoose";
import logger from "./logger";
import { APP_PORT, MONGO_URI, MONGO_OPTIONS } from "./config";
import { createApp } from "./app";

(async () => {
  await mongoose.connect(MONGO_URI, MONGO_OPTIONS);

  const app = createApp();

  app.listen(APP_PORT, () => {
    logger.debug(`App runing on localhost: ${APP_PORT}`);
  });
})();
