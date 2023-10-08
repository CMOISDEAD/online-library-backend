import { Router } from "express";
import { login, recover, register } from "./user";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/recover", recover);

export default router;
