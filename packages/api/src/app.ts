import express, { Application } from "express";
import { signup, login, refreshToken, logout, changePassword } from "./routes";
import cookieParser from "cookie-parser";

export const createApp = (): Application => {
  const app = express();

  app.use(express.json());

  app.use(cookieParser());

  app.use(signup);

  app.use(login);

  app.use(logout);

  app.use(changePassword);

  app.use(refreshToken);

  return app;
};
