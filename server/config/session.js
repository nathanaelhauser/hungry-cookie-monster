"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var session = require("express-session");
var uuid_1 = require("uuid");
var cookieConfig = {
    httpOnly: true,
    maxAge: 60 * 60 * 1000,
    secure: false,
    sameSite: "strict",
};
if (process.env.NODE_ENV === "production") {
    cookieConfig.secure = true;
}
var sessionConfig = {
    secret: process.env.SESSION_SECRET ||
        "some secret that will keep all of the data safe",
    resave: false,
    saveUninitialized: false,
    cookie: cookieConfig,
    genid: function () {
        return (0, uuid_1.v4)();
    },
};
exports.default = session(sessionConfig);
