import mongoose from "mongoose";
import Product from "./Product";
import Tag from "./Tag";

const mongoURL = process.env.MONGO_URL as string;
mongoose.connect(mongoURL);

export { Product, Tag };
