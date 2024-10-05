"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    categoryId: {
        type: Number,
        ref: "Category",
        // required: true,
    },
    tagId: {
        type: Number,
        ref: "Tag",
        required: false,
    },
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "product",
});
const Product = mongoose_1.default.model("Product", productSchema);
exports.default = Product;
/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The name of the product.
 *           example: "The Legend of Zelda : Tears of the Kingdom"
 *         price:
 *           type: number
 *           description: The price of the product.
 *           example: 51.49
 *         image:
 *           type: string
 *           description: The name of the product.
 *           example: "zelda-totk"
 *         description:
 *           type: string
 *           description: The name of the product.
 *           example: "Faites le grand saut : la suite de l’aventure en monde ouvert acclamée par la critique vous attend ."
 *         categoryId:
 *           type: number
 *           description: The id of the category of the product.
 *           example: 7
 *         tagId:
 *           type: number
 *           description: The tag of the product.
 *           example: 0
 */
//# sourceMappingURL=Product.js.map