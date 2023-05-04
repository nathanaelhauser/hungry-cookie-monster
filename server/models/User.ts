import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      minLength: [3, "Username must be at least 3 characters"],
      maxLength: [64, "Username must be at most 64 characters"],
      unique: [true, "Username must be unique"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [8, "Password must be at least 8 characters"],
      maxLength: [32, "Password must be at most 32 characters"],
      set: (value: string) => bcrypt.hashSync(value, 10),
      validate: [
        {
          validator: function (value: string) {
            return /[a-z]/.test(value);
          },
          message: "Password must contain at least one lowercase letter.",
        },
        {
          validator: function (value: string) {
            return /[A-Z]/.test(value);
          },
          message: "Password must contain at least one uppercase letter.",
        },
        {
          validator: function (value: string) {
            return /\d/.test(value);
          },
          message: "Password must contain at least one numeric digit.",
        },
        {
          validator: function (value: string) {
            return /[!@#$%^&*()]/.test(value);
          },
          message:
            "Password must contain at least one special character. ( ! @ # $ % ^ & * ( ) )",
        },
        {
          validator: function (value: string) {
            return !/\s/.test(value);
          },
          message: "Password must not contain any whitespace.",
        },
        {
          validator: function (value: string) {
            return !/^[!@#$%^&*()]/.test(value);
          },
          message:
            "Password must not start with a special character. ( ! @ # $ % ^ & * ( ) )",
        },
      ],
    },
    cookies: [{ type: Schema.Types.ObjectId, ref: "Cookie" }],
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
