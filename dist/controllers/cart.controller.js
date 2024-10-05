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
const jwt_1 = require("../middlewares/jwt");
const cartController = {
    getOneCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { authorization } = req.headers;
            if (!authorization) {
                return res.status(401).json({
                    status: "error",
                    message: "Unauthorized",
                });
            }
            const [_, token] = authorization.split(" ");
            const decodeUser = (yield (0, jwt_1.verifyToken)(token));
            if (!decodeUser) {
                return res.status(401).json({
                    status: "error",
                    message: "Unauthorized",
                });
            }
            const cart = yield models_1.Cart.findOne({ owner: decodeUser.email });
            if (!cart) {
                const cart = new models_1.Cart({
                    owner: decodeUser.email,
                    products: [],
                });
                yield cart.save();
            }
            return res.status(200).json({
                status: "success",
                data: { cart },
            });
        });
    },
    addToCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, productId } = req.body;
            const user = yield models_1.User.findOne({ id: userId });
            const product = yield models_1.Product.findOne({ id: productId });
            if (!user || !product) {
                return res.status(404).json({
                    status: "error",
                    message: "User or product not found",
                });
            }
            const cart = yield models_1.Cart.findOneAndUpdate({ owner: user.email }, { $push: { products: product } });
            if (!cart) {
                const cart = new models_1.Cart({
                    owner: user.email,
                    products: [product],
                });
            }
            return res
                .status(204)
                .json({ status: "success", message: "Product added to cart" });
        });
    },
    removeFromCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, productId, deleteAll } = req.body;
            const user = yield models_1.User.findOne({ id: userId });
            const product = yield models_1.Product.findOne({ id: productId });
            if (!user || !product) {
                return res.status(404).json({
                    status: "error",
                    message: "User or product not found",
                });
            }
            if (!deleteAll) {
                // Remove only one product
                const cart = yield models_1.Cart.findOne({ owner: user.email });
                if (cart) {
                    const productIndex = cart.products.indexOf(product);
                    cart.products.splice(productIndex, 1);
                    yield cart.save();
                }
            }
            else {
                // Remove all products
                const cart = yield models_1.Cart.findOneAndUpdate({ owner: user.email }, { $pull: { products: product } });
            }
            return res
                .status(204)
                .json({ status: "success", message: "Product deleted from the cart" });
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
exports.default = cartController;
//# sourceMappingURL=cart.controller.js.map