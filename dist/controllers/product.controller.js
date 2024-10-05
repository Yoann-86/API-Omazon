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
const productController = {
    getProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.query.id) {
                const product = (yield models_1.Product.findById(req.query.id));
                if (product) {
                    return res.status(200).json({ status: "success", data: { product } });
                }
                return res
                    .status(404)
                    .json({ status: "error", message: "Product not found" });
            }
            const products = (yield models_1.Product.find());
            if (products) {
                console.log({ products });
                return res.status(200).json({ status: "success", data: { products } });
            }
            return res
                .status(404)
                .json({ status: "error", message: "No products found" });
        });
    },
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
            const product = new models_1.Product({
                title,
                price,
                image,
                description,
            });
            const newProduct = yield product.save();
            if (newProduct) {
                return res
                    .status(201)
                    .json({ status: "success", data: { product: newProduct } });
            }
            return res
                .status(502)
                .json({ status: "error", message: "Product not created" });
        });
    },
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, price, image, description } = req.body;
            if (!title || !price || !image || !description) {
                return res
                    .status(400)
                    .json({ status: "error", message: "Invalid input" });
            }
            const id = req.params.id;
            try {
                console.log({ id }, req.body);
                const product = yield models_1.Product.updateOne({ id }, req.body);
                console.log({ product });
                return res
                    .status(204)
                    .json({ status: "success", message: "Product updated" });
            }
            catch (error) {
                return res
                    .status(500)
                    .json({ status: "error", message: "Product not updated" });
            }
        });
    },
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                const result = yield models_1.Product.deleteOne({ _id: id });
                if (result.deletedCount) {
                    return res.status(204).json({ status: "success" });
                }
                return res
                    .status(404)
                    .json({ status: "error", message: "Product not found" });
            }
            catch (error) {
                return res
                    .status(500)
                    .json({ status: "error", message: "Product not deleted" });
            }
        });
    },
    methodNotAllowed(req, res) {
        return res.status(405).json({
            status: "error",
            message: "Method not allowed",
            allow: ["PUT", "DELETE"],
        });
    },
};
exports.default = productController;
//# sourceMappingURL=product.controller.js.map