import { Router } from "express";
import { buyMembership, login, recover, register, updatePhoto } from "./user";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/recover", recover);
router.post("/updatePhoto", updatePhoto);
router.post("/buyMembership", buyMembership);

export default router;
