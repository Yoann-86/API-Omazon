"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const categoryController = {
    getCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.query.id) {
                const category = yield models_1.Category.findById(req.query.id);
                if (category) {
                    return res.status(200).json({ status: "success", data: { category } });
                }
                return res
                    .status(404)
                    .json({ status: "error", message: "category not found" });
            }
            const categories = yield models_1.Category.find();
            if (categories) {
                return res.status(200).json({ status: "success", data: { categories } });
            }
            return res
                .status(404)
                .json({ status: "error", message: "No categories found" });
        });
    },
    createCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    },
    updateCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    },
    deleteCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    },
    methodNotAllowed(req, res) {
        return res.status(405).json({
            status: "error",
            message: "Method not allowed",
            path: "api/tags",
            allow: ["GET"],
        });
    },
    methodNotAllowedParams(_, res) {
        return res.status(405).json({
            status: "error",
            message: "Method not allowed",
            path: "api/tags/:params",
            allow: "none",
        });
    },
};
exports.default = categoryController;
