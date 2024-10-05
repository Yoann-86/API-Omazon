import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "user",
  },
);

const User = mongoose.model("User", userSchema);

export default User;

/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           description: The first name of the user.
 *           example: "Dave"
 *         lastname:
 *           type: string
 *           description: The last name of the user.
 *           example: "Lopper"
 *         email:
 *           type: string
 *           description: The email of the user.
 *           example: "dave.lopper@mail.fr"
 *         password:
 *           type: string
 *           description: The hashed password of the user.
 *           example: "66448941e331c2a4f39104f439876b616b2cbe3d34d04981513336c7d05aa84a04032dd732e741d088c39dda4d3581761f542fc90272f36be210fd32f0aa8ba2.07dcdfbaef20fabae5fa42d55f206b79"
 */
