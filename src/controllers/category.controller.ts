import type { Request, Response } from "express";
import { Category } from "../models";

const categoryController = {
  async getCategories(req: Request, res: Response) {
    if (req.query.id) {
      const category = await Category.findById(req.query.id);
      if (category) {
        return res.status(200).json({ status: "success", data: { category } });
      }
      return res
        .status(404)
        .json({ status: "error", message: "category not found" });
    }

    const categories = await Category.find();
    if (categories) {
      return res.status(200).json({ status: "success", data: { categories } });
    }

    return res
      .status(404)
      .json({ status: "error", message: "No categories found" });
  },

  async createCategory(req: Request, res: Response) {
    // const { title, slug, image } = req.body;
    // if (!title || !slug || !image) {
    //   return res
    //     .status(400)
    //     .json({ status: "error", message: "Invalid input" });
    // }
    // const category = new Category({
    //   type,
    //   text,
    // });
    // const newcategory = await category.save();
    // if (newcategory) {
    //   return res.status(201).json({ status: "success", data: { category: newcategory } });
    // }
    // return res
    //   .status(502)
    //   .json({ status: "error", message: "Category not created" });
  },

  async updateCategory(req: Request, res: Response) {
    // const { title, slug, image } = req.body;
    // if (!title || !slug || !image) {
    //   return res
    //     .status(400)
    //     .json({ status: "error", message: "Invalid input" });
    // }
    // const id = req.params.id;
    // try {
    //   const category = Category.updateOne({ id }, req.body);
    //   return res.status(200).json({ status: "success", data: { category } });
    // } catch (error) {
    //   return res
    //     .status(500)
    //     .json({ status: "error", message: "Category not updated" });
    // }
  },

  async deleteCategory(req: Request, res: Response) {
    // const id = req.params.id;
    // const result = await Category.deleteOne({ _id: id });
    // if (result.deletedCount) {
    //   return res
    //     .status(204)
    //     .json({ status: "success", message: "Category deleted" });
    // }
    // return res
    //   .status(404)
    //   .json({ status: "error", message: "Category not deleted" });
  },

  methodNotAllowed(req: Request, res: Response) {
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

export default categoryController;
