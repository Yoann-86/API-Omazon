import { Router } from "express";
import tagController from "../controllers/tag.controller";

const router = Router();

router.get("/", tagController.getTags);
router.all("/", tagController.methodNotAllowed);
router.all("/:id", tagController.methodNotAllowedParams);

export default router;
