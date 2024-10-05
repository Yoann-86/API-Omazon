"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const cartSchema = new mongoose_1.default.Schema({
    owner: {
        type: String,
        required: true,
        unique: true,
    },
    products: {
        type: Array,
        required: true,
    },
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "cart",
});
const Cart = mongoose_1.default.model("Cart", cartSchema);
exports.default = Cart;
/**
 * @openapi
 * components:
 *   schemas:
 *     Tag:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           unique: true
 *           description: The reference of the category.
 *           example: 3
 *         type:
 *           type: string
 *           description: The type of the tag.
 *           example: "best-seller"
 *         text:
 *           type: string
 *           description: The text to display.
 *           example: "N°1 des ventes"
 */
