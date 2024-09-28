import { Router } from "express";
import tagController from "../controllers/tag.controller";

const router = Router();

router.get("/", tagController.getTags);
router.all("/", tagController.methodNotAllowed);

export default router;
