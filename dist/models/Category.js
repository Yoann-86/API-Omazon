"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const categorySchema = new mongoose_1.default.Schema({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "category",
});
const Category = mongoose_1.default.model("Category", categorySchema);
exports.default = Category;
/**
 * @openapi
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           unique: true
 *           description: The reference of the category.
 *           example: 7
 *         title:
 *           type: string
 *           description: The name of the category.
 *           example: "Jeux vidéos"
 *         slug:
 *           type: string
 *           description: The slug of the category.
 *           example: "jeux-videos"
 *         image:
 *           type: string
 *           description: The name of the category image.
 *           example: "jeux-videos"
 */
//# sourceMappingURL=Category.js.map