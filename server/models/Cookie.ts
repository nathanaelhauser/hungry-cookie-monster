import { Schema, model } from "mongoose";

const cookieSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minLength: [3, "Name must be at least 3 characters"],
      maxLength: [64, "Name must be less than 64 characters"],
    },
    devouredAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

const Cookie = model("Cookie", cookieSchema);

export default Cookie;
