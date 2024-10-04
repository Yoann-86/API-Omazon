import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./routes";
import debug from "debug";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const app = express();
const PORT = process.env.PORT;
const ALLOWED_DOMAINS = process.env.ALLOWED_DOMAINS;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Omazon API",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.ts", "./src/models/*.ts"],
};
const swaggerSpec = swaggerJsdoc(options);

const log = debug("main:server");

app.use(cors({ origin: ALLOWED_DOMAINS }));
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  log(`[🔥🔥] - Server is burning on http://localhost:${PORT} 🚀`);
});

/**
 * @openapi
 * infos:
 *   title: Omazon API
 *   version: 1.0.0
 *   description: This is the API for the Omazon project.
 *   contact:
 *     name: Omazon author
 *     email: "yoann.ar.pro@gmail.com"
 *   license:
 *     name: MIT
 *     url: "https://opensource.org/licenses/MIT"
 *
 */
