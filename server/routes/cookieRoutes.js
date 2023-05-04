"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CookieController_1 = require("../controllers/CookieController");
var router = (0, express_1.Router)();
router.get("/", CookieController_1.default.index);
router.get("/:id", CookieController_1.default.show);
router.post("/", CookieController_1.default.create);
router.put("/:id", CookieController_1.default.update);
router.delete("/:id", CookieController_1.default.destroy);
exports.default = router;