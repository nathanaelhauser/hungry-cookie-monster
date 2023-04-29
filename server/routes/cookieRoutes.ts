import { Router } from "express";
import CookieController from "../controllers/CookieController";

const router = Router();

router.get("/", CookieController.index);

router.get("/:id", CookieController.show);

router.post("/", CookieController.create);

router.put("/:id", CookieController.update);

router.delete("/:id", CookieController.destroy);

export default router;
