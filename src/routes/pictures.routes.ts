import { Router } from "express";
import path from "node:path";

const router = Router();

interface IOptions {
  root: string;
  dotfiles: "deny" | "allow" | "ignore";
  headers: {
    "x-timestamp": number;
    "x-sent": boolean;
  };
}

router.get("/products/:slug", (req, res, next) => {
  const slug = req.params.slug;
  const options: IOptions = {
    root: path.join(`${__dirname}/../public/pictures/products`),
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
  const options: IOptions = {
    root: path.join(`${__dirname}/../public/pictures/categories`),
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

export default router;

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
