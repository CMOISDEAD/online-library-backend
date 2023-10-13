import { Router } from "express";
import { buyMembership, login, recover, register } from "./user";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/recover", recover);
router.post("/buyMembership", buyMembership);

export default router;
