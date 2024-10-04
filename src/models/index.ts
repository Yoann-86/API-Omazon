import mongoose from "mongoose";
import Product from "./Product";
import Tag from "./Tag";
import Category from "./Category";
import User from "./User";

const mongoURL = process.env.MONGO_URL as string;
mongoose.connect(mongoURL);

export { Product, Tag, Category, User };
