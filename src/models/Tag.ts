import mongoose from "mongoose";

const tagSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "tag",
  },
);

const Tag = mongoose.model("Tag", tagSchema);

export default Tag;

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
