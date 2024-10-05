import { Router } from "express";
import userController from "../controllers/user.controller";

const router = Router();

// router.get("/", userController.getUser);
router.post("/", userController.createUser);
router.delete("/", userController.deleteUser);
router.all("/", userController.methodNotAllowed);

export default router;

/** Swagger documentation
 * @openapi
 * /api/user:
 *
 *  post:
 *     summary: Create a new user.
 *     tags: [Users]
 *     description:
 *       Create a new user in database.
 *     requestBody:
 *        required: true
 *        description: The user to create.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                firstname:
 *                  type: string
 *                  description: The first name of the user.
 *                  example: "Anne"
 *                lastname:
 *                  type: string
 *                  description: The last name of the user.
 *                  example: "Onyme"
 *                email:
 *                  type: string
 *                  description: The email of the user.
 *                  example: "anne.onyme@mail.fr"
 *                password:
 *                  type: string
 *                  description: The password of the user.
 *                  example: "chut"
 *
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
 *                   properties:
 *                     user:
 *                       $ref: '#/components/schemas/User'
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
 *                   example: "No user found"
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
 *
 *  delete:
 *     summary: Delete a user.
 *     tags: [Users]
 *     description:
 *       Delete a user in database.
 *     requestBody:
 *        required: true
 *        description: The user to delete.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  description: The email of the user.
 *                  example: "anne.onyme@mail.fr"
 *                password:
 *                  type: string
 *                  description: The password of the user.
 *                  example: "chut"
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
 *                   example: "No user found"
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
 *                   example: "Internal server error"
 */
