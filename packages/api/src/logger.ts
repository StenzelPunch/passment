import { createLogger, format, transports } from "winston";
import { NODE_ENV } from "./config";

const { combine, timestamp, printf, colorize, simple, json, metadata } = format;

const consoleFormat = printf(({ level, message }): string => {
  return `[${level}]: ${message}`;
});

const fileOptions = {
  timestamp: timestamp(),
  format: combine(
    timestamp({
      format: "DD.MM.YY HH:mm:ss ZZ"
    }),
    metadata({ fillExcept: ["message", "level", "timestamp", "label"] }),
    json()
  ),
  json: true,
  maxsize: 1024 * 1024 * 100, // 100MB
  maxFiles: 10,
  colorize: false
};

const options = {
  error: {
    level: "error",
    filename: `./logs/errors.log`,
    handleExceptions: true,
    ...fileOptions
  },
  info: {
    level: "info",
    filename: `./logs/info.log`,
    handleExceptions: true,
    ...fileOptions
  },
  console: {
    level: "debug",
    handleExceptions: true,
    format: combine(
      metadata({
        fillExcept: ["message", "level", "timestamp", "label"]
      }),
      colorize(),
      simple(),
      consoleFormat
    ),
    colorize: true
  }
};

const logger = createLogger({
  transports: [
    new transports.File(options.error),
    new transports.File(options.info)
  ],
  exitOnError: false
});

if (NODE_ENV === "development") {
  logger.add(new transports.Console(options.console));
}

export default logger;
