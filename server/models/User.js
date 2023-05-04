"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bcrypt_1 = require("bcrypt");
var userSchema = new mongoose_1.Schema({
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
        set: function (value) { return bcrypt_1.default.hashSync(value, 10); },
        validate: [
            {
                validator: function (value) {
                    return /[a-z]/.test(value);
                },
                message: "Password must contain at least one lowercase letter.",
            },
            {
                validator: function (value) {
                    return /[A-Z]/.test(value);
                },
                message: "Password must contain at least one uppercase letter.",
            },
            {
                validator: function (value) {
                    return /\d/.test(value);
                },
                message: "Password must contain at least one numeric digit.",
            },
            {
                validator: function (value) {
                    return /[!@#$%^&*()]/.test(value);
                },
                message: "Password must contain at least one special character. ( ! @ # $ % ^ & * ( ) )",
            },
            {
                validator: function (value) {
                    return !/\s/.test(value);
                },
                message: "Password must not contain any whitespace.",
            },
            {
                validator: function (value) {
                    return !/^[!@#$%^&*()]/.test(value);
                },
                message: "Password must not start with a special character. ( ! @ # $ % ^ & * ( ) )",
            },
        ],
    },
    cookies: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Cookie" }],
}, { timestamps: true });
var User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
