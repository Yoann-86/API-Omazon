import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
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
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      // required: true,
    },
    tagId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
      required: false,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "product",
  },
);

const Product = mongoose.model("Product", productSchema);

export default Product;

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
 */
