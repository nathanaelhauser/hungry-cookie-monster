import { Router } from "express";
import cookieRoutes from "./cookieRoutes";
import htmlRoutes from "./htmlRoutes";
import userRoutes from "./userRoutes";

const router = Router();

router.use("/cookies", cookieRoutes);
router.use("/users", userRoutes);
router.use("/", htmlRoutes);

export default router;
