import { Router } from "express";
import categoryController from "../controllers/category.controller";

const router = Router();

router.get("/", categoryController.getCategories);
router.all("/", categoryController.methodNotAllowed);
router.all("/:id", categoryController.methodNotAllowedParams);

export default router;
