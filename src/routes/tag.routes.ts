import { Router } from "express";
import tagController from "../controllers/tag.controller";

const router = Router();

router.get("/", tagController.getTags);
router.all("/", tagController.methodNotAllowed);
router.all("/:id", tagController.methodNotAllowedParams);

export default router;

/** Swagger documentation
 * @openapi
 * /api/tags:
 *  get:
 *     summary: Get all tags or one using query params with id.
 *     tags: [Tags]
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
