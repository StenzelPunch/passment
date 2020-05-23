import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";

const salt = 10;

export enum UserRoles {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST",
  ORGANIZATION_ADMIN = "ORGANIZATION_ADMIN"
}

export interface UserDocument extends Document {
  email: string;
  password: string;
  name: string;
  emailVerify: boolean;
  premium: boolean;
  slug: string;
  bio: string;
  id: string;
  role: UserRoles;
  checkPassword: (password: string) => Promise<boolean>;
}

const userSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 256
    },
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 128
    },
    bio: {
      type: String,
      maxlength: 300
    },
    emailVerify: {
      type: Boolean,
      required: true,
      default: false
    },
    premium: {
      type: Boolean,
      required: true,
      default: false
    },
    slug: {
      type: String,
      required: true,
      maxlength: 64,
      min: 1,
      unique: true
    },
    role: {
      type: String,
      enum: Object.keys(UserRoles),
      required: true,
      default: UserRoles.USER
    }
  },
  {
    timestamps: true
  }
);

userSchema.pre<UserDocument>("save", function (next) {
  try {
    if (this.isModified("password")) {
      bcrypt.genSalt(salt, (e, salt) => {
        if (e) throw new Error("Can't generate salt");
        bcrypt.hash(this.password, salt, (e, hash) => {
          if (e) throw new Error("Can't generate hash");
          this.password = hash;
          next();
        });
      });
    } else {
      next();
    }
  } catch (e) {
    throw new Error(`Password error: ${e.message}`);
  }
});

userSchema.methods.checkPassword = function (
  password: string
): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

export const User = model<UserDocument>("User", userSchema);
