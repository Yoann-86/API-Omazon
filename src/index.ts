import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./routes";
import debug from "debug";

const app = express();
const PORT = process.env.PORT;
const ALLOWED_DOMAINS = process.env.ALLOWED_DOMAINS;

const log = debug("main:server");

app.use(cors({ origin: ALLOWED_DOMAINS }));
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(PORT, () => {
  log(`[🚀] - Server is running on http://localhost:${PORT}`);
});
