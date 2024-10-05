"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_routes_1 = __importDefault(require("./product.routes"));
const tag_routes_1 = __importDefault(require("./tag.routes"));
const category_routes_1 = __importDefault(require("./category.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const pictures_routes_1 = __importDefault(require("./pictures.routes"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const cart_routes_1 = __importDefault(require("./cart.routes"));
const router = (0, express_1.Router)();
const API_ADMIN = process.env.API_ADMIN;
router.use("/products", product_routes_1.default);
router.use("/tags", tag_routes_1.default);
router.use("/categories", category_routes_1.default);
router.use("/user", user_routes_1.default);
router.use("/pictures", pictures_routes_1.default);
router.post("/login", user_controller_1.default.loginUser);
router.use("/cart", cart_routes_1.default);
// API Admin routes
router.get(`/${API_ADMIN}/users`, user_controller_1.default.getAll);
exports.default = router;
