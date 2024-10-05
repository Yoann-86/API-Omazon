"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const router = (0, express_1.Router)();
router.get("/", product_controller_1.default.getProducts);
router.post("/", product_controller_1.default.createProduct);
router.put("/:id", product_controller_1.default.updateProduct);
router.delete("/:id", product_controller_1.default.deleteProduct);
router.patch("/:id", product_controller_1.default.methodNotAllowed);
exports.default = router;
/** Swagger documentation
 * @openapi
 * /api/products:
 *  get:
 *     summary: Get all products or one using query params with id.
 *     tags: [Products]
 *     description:
 *       Return all products if no query params are provided or one product using query params with the product id (/api/products?id=123456).
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
 *                   $ref: '#/components/schemas/Product'
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
 *                   example: "No products found"
 *
 *  post:
 *     summary: Add a new product.
 *     tags: [Products]
 *     description:
 *       Return the new product created.
 *     requestBody:
 *        required: true
 *        description: The product to create.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: CREATED
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
 *                   $ref: '#/components/schemas/Product'
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
 *                   example: "No products found"
 *
 *       400:
 *         description: BAD REQUEST
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
 *                   example: "Invalid input"
 *
 *       502:
 *         description: BAD GATEWAY
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
 *                   example: "Product not created"
 *
 * /api/products/{id}:
 *  put:
 *     summary: Update a product.
 *     tags: [Products]
 *     description:
 *       Return an object with the status and the updated product.
 *     parameters:
 *      - in: path
 *        name: id
 *     requestBody:
 *        required: true
 *        description: The product to create.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Product'
 *     responses:
 *       204:
 *         description: NO CONTENT
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: The status of the response.
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   description: The message of the response.
 *                   example: "Product updated"
 *       400:
 *         description: BAD REQUEST
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
 *                   example: "Invalid input"
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
 *                   example: "Product not created"
 *
 *  delete:
 *     summary: Delete an existing product.
 *     tags: [Products]
 *     description:
 *       Return a success or fail message.
 *     parameters:
 *      - in: path
 *        name: id
 *
 *     responses:
 *       204:
 *         description: NO CONTENT
 *
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
 *                   example: "Product not found"
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
 *                   example: "Product not deleted"
 */
//# sourceMappingURL=product.routes.js.map