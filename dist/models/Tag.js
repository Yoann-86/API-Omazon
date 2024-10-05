"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const tagSchema = new mongoose_1.default.Schema({
    id: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "tag",
});
const Tag = mongoose_1.default.model("Tag", tagSchema);
exports.default = Tag;
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
//# sourceMappingURL=Tag.js.map