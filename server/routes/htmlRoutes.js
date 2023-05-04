"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path = require("path");
var router = (0, express_1.Router)();
// Create a catch all route that will send the user to the React app
// This is the only route that will be used in this app
router.get("*", function (req, res) {
    return res.sendFile(path.join(__dirname, "..", "..", "client", "build", "index.html"));
});
exports.default = router;
