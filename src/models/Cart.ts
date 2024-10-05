import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    owner: {
      type: String,
      required: true,
      unique: true,
    },
    products: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "cart",
  },
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;

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
