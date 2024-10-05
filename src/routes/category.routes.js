"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = __importDefault(require("../controllers/category.controller"));
const router = (0, express_1.Router)();
router.get("/", category_controller_1.default.getCategories);
router.all("/", category_controller_1.default.methodNotAllowed);
router.all("/:id", category_controller_1.default.methodNotAllowedParams);
exports.default = router;
/**
 * @openapi
 * /api/categories:
 *  get:
 *     summary: Get all categories or one using query params with id.
 *     tags: [Categories]
 *     description:
 *       Return all categories if no query params are provided or one product using query params with the product id (/api/categories?id=123456).
 *     parameters:
 *     - in: query
 *       name: id
 *     schema:
 *      type: string
 *      required: false
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: The status of the response.
 *                   example: "success"
 *                 data:
 *                   $ref: '#/components/schemas/Category'
 *       404:
 *         description: NOT FOUND
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: The status of the response.
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   description: The message of the response.
 *                   example: "No categories found"
 *
 */
