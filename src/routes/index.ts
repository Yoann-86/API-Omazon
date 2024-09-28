import { Router } from "express";
import productRoutes from "./product.routes";
import tagRoutes from "./tag.routes";

const router = Router();

router.use("/products", productRoutes);
router.use("/tags", tagRoutes);

export default router;
