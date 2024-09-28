import { Router } from "express";
import productController from "../controllers/product.controller";

const router = Router();

router.get("/", productController.getProducts);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
router.patch("/:id", productController.methodNotAllowed);

export default router;
