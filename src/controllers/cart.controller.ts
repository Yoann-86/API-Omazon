import type { Request, Response } from "express";
import { Cart, Product, User } from "../models";
import { verifyToken } from "../middlewares/jwt";

const cartController = {
  async getOneCart(req: Request, res: Response) {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({
        status: "error",
        message: "Unauthorized",
      });
    }
    const [_, token] = authorization.split(" ");
    const decodeUser = (await verifyToken(token)) as {
      firstname: string;
      lastname: string;
      email: string;
      iat: number;
      exp: number;
    };

    if (!decodeUser) {
      return res.status(401).json({
        status: "error",
        message: "Unauthorized",
      });
    }

    const cart = await Cart.findOne({ owner: decodeUser.email });

    if (!cart) {
      const cart = new Cart({
        owner: decodeUser.email,
        products: [],
      });

      await cart.save();
    }

    return res.status(200).json({
      status: "success",
      data: { cart },
    });
  },

  async addToCart(req: Request, res: Response) {
    const { userId, productId } = req.body;

    const user = await User.findOne({ id: userId });
    const product = await Product.findOne({ id: productId });

    if (!user || !product) {
      return res.status(404).json({
        status: "error",
        message: "User or product not found",
      });
    }

    const cart = await Cart.findOneAndUpdate(
      { owner: user.email },
      { $push: { products: product } },
    );

    if (!cart) {
      const cart = new Cart({
        owner: user.email,
        products: [product],
      });
    }

    return res
      .status(204)
      .json({ status: "success", message: "Product added to cart" });
  },

  async removeFromCart(req: Request, res: Response) {
    const { userId, productId, deleteAll } = req.body;

    const user = await User.findOne({ id: userId });
    const product = await Product.findOne({ id: productId });

    if (!user || !product) {
      return res.status(404).json({
        status: "error",
        message: "User or product not found",
      });
    }

    if (!deleteAll) {
      // Remove only one product
      const cart = await Cart.findOne({ owner: user.email });

      if (cart) {
        const productIndex = cart.products.indexOf(product);

        cart.products.splice(productIndex, 1);

        await cart.save();
      }
    } else {
      // Remove all products
      const cart = await Cart.findOneAndUpdate(
        { owner: user.email },
        { $pull: { products: product } },
      );
    }

    return res
      .status(204)
      .json({ status: "success", message: "Product deleted from the cart" });
  },

  methodNotAllowed(_: Request, res: Response) {
    return res.status(405).json({
      status: "error",
      message: "Method not allowed",
      path: "api/tags",
      allow: ["GET"],
    });
  },

  methodNotAllowedParams(_: Request, res: Response) {
    return res.status(405).json({
      status: "error",
      message: "Method not allowed",
      path: "api/tags/:params",
      allow: "none",
    });
  },
};

export default cartController;
