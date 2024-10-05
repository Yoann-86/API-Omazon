import { Router } from "express";
import productRoutes from "./product.routes";
import tagRoutes from "./tag.routes";
import categoryRoutes from "./category.routes";
import userRoutes from "./user.routes";
import picturesRoutes from "./pictures.routes";
import userController from "../controllers/user.controller";
import cartRoutes from "./cart.routes";

const router = Router();

const API_ADMIN = process.env.API_ADMIN as string;

router.use("/products", productRoutes);
router.use("/tags", tagRoutes);
router.use("/categories", categoryRoutes);
router.use("/user", userRoutes);
router.use("/pictures", picturesRoutes);
router.post("/login", userController.loginUser);
router.use("/cart", cartRoutes);

// API Admin routes
router.get(`/${API_ADMIN}/users`, userController.getAll);

export default router;
