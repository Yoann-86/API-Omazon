import { Router } from "express";
import userController from "../controllers/user.controller";

const router = Router();

router.get("/", userController.getUser);
router.post("/", userController.createUser);
router.all("/", userController.methodNotAllowed);

export default router;
