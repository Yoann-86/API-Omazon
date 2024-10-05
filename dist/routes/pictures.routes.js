"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const node_path_1 = __importDefault(require("node:path"));
const router = (0, express_1.Router)();
router.get("/products/:slug", (req, res, next) => {
    const slug = req.params.slug;
    const options = {
        root: node_path_1.default.join(`${__dirname}/../public/pictures/products`),
        dotfiles: "deny",
        headers: {
            "x-timestamp": Date.now(),
            "x-sent": true,
        },
    };
    res.sendFile(`${slug}.webp`, options, (err) => {
        if (err) {
            next(err);
        }
        console.log("Sent:", `${slug}.webp`);
    });
});
router.get("/categories/:slug", (req, res, next) => {
    const slug = req.params.slug;
    const options = {
        root: node_path_1.default.join(`${__dirname}/../public/pictures/categories`),
        dotfiles: "deny",
        headers: {
            "x-timestamp": Date.now(),
            "x-sent": true,
        },
    };
    res.sendFile(`${slug}.webp`, options, (err) => {
        if (err) {
            next(err);
        }
        console.log("Sent:", `${slug}.webp`);
    });
});
exports.default = router;
/**
 * @openapi
 * /api/pictures/products/{slug}:
 *  get:
 *     tags: [Pictures]
 *     summary: Get a picture of a product.
 *     description:
 *       Return the picture of a product.
 *     parameters:
 *     - in: path
 *       name: slug
 *     schema:
 *      type: string
 *      required: true
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           image/webp:
 *             schema:
 *               type: file
 *
 *       404:
 *         description: NOT FOUND
 *
 *       500:
 *         description: INTERNAL SERVER ERROR
 *
 * /api/pictures/categories/{slug}:
 *  get:
 *     tags: [Pictures]
 *     summary: Get a picture of a category.
 *     description:
 *       Return the picture of a category.
 *     parameters:
 *     - in: path
 *       name: slug
 *     schema:
 *      type: string
 *      required: true
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           image/webp:
 *             schema:
 *               type: file
 *
 *       404:
 *         description: NOT FOUND
 *
 *       500:
 *         description: INTERNAL SERVER ERROR
 */
//# sourceMappingURL=pictures.routes.js.map