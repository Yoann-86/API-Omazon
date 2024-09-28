import type { Request, Response } from "express";
import { Tag } from "../models";

const tagController = {
  async getTags(req: Request, res: Response) {
    if (req.query.id) {
      const tag = await Tag.findById(req.query.id);
      if (tag) {
        return res.status(200).json({ status: "success", data: { tag } });
      }
      return res
        .status(404)
        .json({ status: "error", message: "Tag not found" });
    }

    const tags = await Tag.find();
    if (tags) {
      return res.status(200).json({ status: "success", data: { tags } });
    }

    return res.status(404).json({ status: "error", message: "No tags found" });
  },

  async createTag(req: Request, res: Response) {
    // const { type, text } = req.body;
    // if (!type || !text) {
    //   return res
    //     .status(400)
    //     .json({ status: "error", message: "Invalid input" });
    // }
    // const tag = new Tag({
    //   type,
    //   text,
    // });
    // const newtag = await tag.save();
    // if (newtag) {
    //   return res.status(201).json({ status: "success", data: { tag: newtag } });
    // }
    // return res
    //   .status(502)
    //   .json({ status: "error", message: "Tag not created" });
  },

  async updateTag(req: Request, res: Response) {
    // const { type, text } = req.body;
    // if (!type || !text) {
    //   return res
    //     .status(400)
    //     .json({ status: "error", message: "Invalid input" });
    // }
    // const id = req.params.id;
    // try {
    //   const tag = Tag.updateOne({ id }, req.body);
    //   return res.status(200).json({ status: "success", data: { tag } });
    // } catch (error) {
    //   return res
    //     .status(500)
    //     .json({ status: "error", message: "Tag not updated" });
    // }
  },

  async deleteTag(req: Request, res: Response) {
    // const id = req.params.id;
    // const result = await Tag.deleteOne({ _id: id });
    // if (result.deletedCount) {
    //   return res
    //     .status(204)
    //     .json({ status: "success", message: "Tag deleted" });
    // }
    // return res
    //   .status(404)
    //   .json({ status: "error", message: "Tag not deleted" });
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

export default tagController;
