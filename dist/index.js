"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const routes_1 = __importDefault(require("./routes"));
const debug_1 = __importDefault(require("debug"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const app = (0, express_1.default)();
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
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
const log = (0, debug_1.default)("main:server");
app.use((0, cors_1.default)({ origin: ALLOWED_DOMAINS }));
app.use(express_1.default.static("./public"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", routes_1.default);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
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
//# sourceMappingURL=index.js.map