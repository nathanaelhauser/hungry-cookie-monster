"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var cookieSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
var Cookie = (0, mongoose_1.model)("Cookie", cookieSchema);
exports.default = Cookie;
