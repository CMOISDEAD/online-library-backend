import { Router } from "express";
import { buyMembership, login, recover, register } from "./auth.controller";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/recover", recover);
router.post("/buyMembership", buyMembership);
router.get("/test", (req, res) => {
  res.status(200).json({ message: "Auth route" });
});

export default router;
