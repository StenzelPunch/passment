import { Schema, model, Document } from "mongoose";
import { JWT_REFRESH_TTL } from "../config";

export interface RefreshTokenDocument extends Document {
  token: string;
}

const refreshTokenSchema = new Schema(
  {
    token: String,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    createdAt: {
      type: Date,
      default: Date.now(),
      expires: JWT_REFRESH_TTL
    }
  },
  {
    timestamps: true
  }
);

export const RefreshToken = model<RefreshTokenDocument>(
  "RefreshToken",
  refreshTokenSchema
);
