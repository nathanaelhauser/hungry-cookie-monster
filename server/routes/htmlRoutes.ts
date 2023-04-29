import { Router } from "express";
import path from "path";

const router = Router();

// Create a catch all route that will send the user to the React app
// This is the only route that will be used in this app
router.get("*", (req, res) => {
  return res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

export default router;
