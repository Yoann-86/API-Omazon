import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "category",
  },
);

const Category = mongoose.model("Category", categorySchema);

export default Category;

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
