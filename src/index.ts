import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./routes";

const app = express();
const PORT = process.env.PORT;
const ALLOWED_DOMAINS = process.env.ALLOWED_DOMAINS;

app.use(cors({ origin: ALLOWED_DOMAINS }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", (req, res, next) => {
  console.log("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
