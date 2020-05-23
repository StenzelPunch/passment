import { Schema, model, Document } from "mongoose";

export interface LinkDocument extends Document {
  body: string;
  userId: string;
  category: LinksCategories;
}

export enum LinksCategories {
  SOCIAL = "SOCIAL",
  VIDEO = "VIDEO",
  MUSIC = "MUSIC",
  TRAVEL = "TRAVEL",
  FILES = "FILES",
  MESSENGERS = "MESSENGERS",
  APPS = "APPS",
  BANKS = "BANKS",
  GAMES = "GAMES",
  CREATION = "CREATION",
  UNKOWN = "UNKOWN"
}

const linkSchema = new Schema(
  {
    body: String,
    category: {
      type: String,
      enum: Object.keys(LinksCategories),
      required: true,
      default: LinksCategories.UNKOWN
    },
    userId: { type: Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true
  }
);

export const Link = model<LinkDocument>("Link", linkSchema);
