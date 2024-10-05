"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_controller_1 = __importDefault(require("../controllers/cart.controller"));
const router = (0, express_1.Router)();
router.get("/", cart_controller_1.default.getOneCart);
router.post("/", cart_controller_1.default.addToCart);
router.put("/", cart_controller_1.default.removeFromCart);
router.all("/", cart_controller_1.default.methodNotAllowed);
router.all("/:id", cart_controller_1.default.methodNotAllowedParams);
exports.default = router;
/** Swagger documentation
 * @openapi
 * /api/tags:
 *  get:
 *     summary: Get all tags or one using query params with id.
 *     tags: [Cart]
 *     description:
 *       Return all tags if no query params are provided or one product using query params with the product id (/api/tags?id=123456).
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
 *                   $ref: '#/components/schemas/Tag'
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
 *                   example: "No tags found"
 *
 *       500:
 *         description: INTERNAL SERVER ERROR
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
 *                   example: "Internal server error"
 */
