import { Router } from "express";
import productRoutes from "./product.routes";
import tagRoutes from "./tag.routes";
import categoryRoutes from "./category.routes";

const router = Router();

router.use("/products", productRoutes);
router.use("/tags", tagRoutes);
router.use("/categories", categoryRoutes);

export default router;
