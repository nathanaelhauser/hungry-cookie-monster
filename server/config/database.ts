import mongoose from "mongoose";

const MONGO_URI: string =
  process.env.MONGO_URI || "mongodb://localhost:27017/cookies";

mongoose.connect(MONGO_URI);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

export default db;
