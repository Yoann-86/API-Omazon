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
const tagController = {
    getTags(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req.query.id) {
                    const tag = yield models_1.Tag.findById(req.query.id);
                    if (tag) {
                        return res.status(200).json({ status: "success", data: { tag } });
                    }
                    return res
                        .status(404)
                        .json({ status: "error", message: "Tag not found" });
                }
                const tags = yield models_1.Tag.find();
                if (tags) {
                    return res.status(200).json({ status: "success", data: { tags } });
                }
                return res
                    .status(404)
                    .json({ status: "error", message: "No tags found" });
            }
            catch (error) {
                if (error instanceof Error)
                    return res
                        .status(500)
                        .json({ status: "error", message: error.message });
            }
        });
    },
    createTag(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    },
    updateTag(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    },
    deleteTag(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    },
    methodNotAllowed(_, res) {
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
exports.default = tagController;
