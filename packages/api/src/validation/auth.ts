import Joi from "@hapi/joi";

const name = Joi.string().min(2).max(128).required().messages({
  "string.base": "Name must be a string",
  "string.min": "Name must contain at least {#limit} characters",
  "string.max": "Name must contain no more {#limit} characters",
  "any.required": "Name required"
});

const email = Joi.string()
  .email()
  .min(8)
  .max(254)
  .lowercase()
  .trim()
  .required()
  .messages({
    "string.base": "Email must be a string",
    "string.min": "Email must contain at least {#limit} characters",
    "string.max": "Email must contain no more {#limit} characters",
    "any.required": "Email required",
    "string.email": "Email invalid"
  });

const password = Joi.string().min(6).max(128).required().messages({
  "string.base": "Password must be a string",
  "string.min": "Password must contain at least {#limit} characters",
  "string.max": "Password must contain no more {#limit} characters",
  "any.required": "Password required"
});

const passwordConfirmation = Joi.valid(Joi.ref("password"))
  .required()
  .messages({
    "any.only": "Passwords do not match",
    "any.required": "Password confirmation required"
  });

export const signupSchema = Joi.object({
  name,
  email,
  password,
  passwordConfirmation
});

export const loginSchema = Joi.object({
  email,
  password
});

export const changePasword = Joi.object({
  oldPassword: password,
  password,
  passwordConfirmation
});
