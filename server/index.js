"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Load environment variables from .env file right at the top of the file
var dotenv_1 = require("dotenv");
var path = require("path");
(0, dotenv_1.config)({ path: path.resolve(__dirname, "../.env") });
var express = require("express");
var session_1 = require("./config/session");
var database_1 = require("./config/database");
var routes_1 = require("./routes");
var app = express();
var PORT = process.env.PORT || 3001;
// Define middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(session_1.default);
// Define API routes here
app.use(routes_1.default);
// Connect to the Mongo DB
database_1.default.once("open", function () {
    console.log("Connected to MongoDB");
    // Only start the server if the database connection is successful
    app.listen(PORT, function () {
        console.log("App running on port ".concat(PORT, "!"));
    });
});
