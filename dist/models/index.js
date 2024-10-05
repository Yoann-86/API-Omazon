"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = exports.User = exports.Category = exports.Tag = exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Product_1 = __importDefault(require("./Product"));
exports.Product = Product_1.default;
const Tag_1 = __importDefault(require("./Tag"));
exports.Tag = Tag_1.default;
const Category_1 = __importDefault(require("./Category"));
exports.Category = Category_1.default;
const User_1 = __importDefault(require("./User"));
exports.User = User_1.default;
const Cart_1 = __importDefault(require("./Cart"));
exports.Cart = Cart_1.default;
const mongoURL = process.env.MONGO_URL;
mongoose_1.default.connect(mongoURL);
//# sourceMappingURL=index.js.map