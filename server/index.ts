// Load environment variables from .env file right at the top of the file
import { config } from "dotenv";
const path = require("path");
config({ path: path.resolve(__dirname, "../.env") });

const express = require("express");
import session from "./config/session";
import db from "./config/database";
import router from "./routes";

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(session);

// Define API routes here
app.use(router);

// Connect to the Mongo DB
db.once("open", () => {
  console.log("Connected to MongoDB");

  // Only start the server if the database connection is successful
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
});
