import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.get("/", UserController.index);

router.get("/:id", UserController.show);

router.post("/", UserController.create);

router.put("/:id", UserController.update);

router.delete("/:id", UserController.destroy);

export default router;
