import type { Request, Response } from "express";
import { Product } from "../models";
import type { IProduct } from "../@types";

const productController = {
  async getProducts(req: Request, res: Response) {
    if (req.query.id) {
      const product = (await Product.findById(req.query.id)) as IProduct;
      if (product) {
        return res.status(200).json({ status: "success", data: { product } });
      }
      return res
        .status(404)
        .json({ status: "error", message: "Product not found" });
    }

    const products = (await Product.find()) as IProduct[];
    if (products) {
      return res.status(200).json({ status: "success", data: { products } });
    }

    return res
      .status(404)
      .json({ status: "error", message: "No products found" });
  },

  async createProduct(req: Request, res: Response) {
    const { title, price, image, description } = req.body;
    // add category required & tag optional

    if (price <= 0) {
      return res.status(400).json({
        status: "error",
        message: "Price must be greater than 0",
      });
    }
    if (!title || !price || !image || !description) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid input" });
    }

    const product = new Product({
      title,
      price,
      image,
      description,
    });

    const newProduct = await product.save();

    if (newProduct) {
      return res
        .status(201)
        .json({ status: "success", data: { product: newProduct } });
    }

    return res
      .status(502)
      .json({ status: "error", message: "Product not created" });
  },

  async updateProduct(req: Request, res: Response) {
    const { title, price, image, description } = req.body;

    if (!title || !price || !image || !description) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid input" });
    }

    const id = req.params.id;

    try {
      console.log({ id }, req.body);

      const product = await Product.updateOne({ id }, req.body);
      console.log({ product });
      return res
        .status(204)
        .json({ status: "success", message: "Product updated" });
    } catch (error) {
      return res
        .status(500)
        .json({ status: "error", message: "Product not updated" });
    }
  },

  async deleteProduct(req: Request, res: Response) {
    const id = req.params.id;

    try {
      const result = await Product.deleteOne({ _id: id });

      if (result.deletedCount) {
        return res.status(204);
      }

      return res
        .status(404)
        .json({ status: "error", message: "Product not found" });
    } catch (error) {
      return res
        .status(500)
        .json({ status: "error", message: "Product not deleted" });
    }
  },

  methodNotAllowed(req: Request, res: Response) {
    return res.status(405).json({
      status: "error",
      message: "Method not allowed",
      allow: ["PUT", "DELETE"],
    });
  },
};

export default productController;
