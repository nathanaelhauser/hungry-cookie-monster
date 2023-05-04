"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/cookies";
mongoose_1.default.connect(MONGO_URI);
var db = mongoose_1.default.connection;
db.on("error", console.error.bind(console, "connection error:"));
exports.default = db;
