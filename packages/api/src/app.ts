import express, { Application } from "express";
import { signup, login, refreshToken, logout, changePassword } from "./routes";
import cookieParser from "cookie-parser";
import { Response, Request } from "express";
import logger from "./logger";
import { FailureResponse } from "./models";
import { NODE_ENV } from "./config";
import path from "path";

const baseUrl = "api";

export const createApp = (): Application => {
  const app = express();
  const routes = [signup, login, logout, changePassword, refreshToken];

  app.use(express.json());

  app.use(cookieParser());

  app.use(`/${baseUrl}`, routes);

  app.use(`/${baseUrl}`, (_, res: Response) => {
    res.status(404).json(new FailureResponse("Not found"));
  });

  app.use(`/${baseUrl}`, (err: Error, _: Request, res: Response) => {
    logger.error(err.message, err.stack);
    res.status(500).json(new FailureResponse("Internal server error"));
  });

  if (NODE_ENV === "production") {
    const clientBuildDirectory = path.resolve(__dirname, "../../client/build");

    app.use(express.static(clientBuildDirectory));

    app.use(`/*`, async (req, res) => {
      res.sendFile("index.html", { root: clientBuildDirectory });
    });
  }

  return app;
};
