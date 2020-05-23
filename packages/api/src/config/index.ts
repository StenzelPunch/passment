import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../../../../.env") });

export * from "./db";
export * from "./jwt";
export * from "./app";
