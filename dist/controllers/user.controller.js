"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const scrypt_1 = require("../middlewares/scrypt");
const jwt_1 = require("../middlewares/jwt");
const userController = {
    // API Admin route
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield models_1.User.find();
            res.status(200).json({ status: "success", data: users });
        });
    },
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            if (!email || !password) {
                return res
                    .status(400)
                    .json({ status: "error", message: "Invalid input" });
            }
            const user = yield models_1.User.findOne({ email });
            const verifiedPassword = user && (yield (0, scrypt_1.verifyPassword)(user.password, password));
            if (!user || !verifiedPassword) {
                return res
                    .status(400)
                    .json({ status: "error", message: "Invalid email or password" });
            }
            const { firstname, lastname, id } = user;
            const generatedToken = yield (0, jwt_1.generateToken)({
                firstname,
                lastname,
                email,
            });
            return res.status(200).json({
                status: "success",
                data: {
                    user: {
                        id,
                        firstName: firstname,
                        lastName: lastname,
                        email,
                        accessToken: generatedToken,
                    },
                },
            });
        });
    },
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstname, lastname, email, password } = req.body;
            if (!firstname || !lastname || !email || !password) {
                return res
                    .status(400)
                    .json({ status: "error", message: "Invalid input" });
            }
            const userExists = yield models_1.User.findOne({ email });
            if (userExists) {
                return res
                    .status(409)
                    .json({ status: "error", message: "User already exists" });
            }
            const hashedPassword = yield (0, scrypt_1.hashPassword)(password);
            const user = new models_1.User({
                firstname,
                lastname,
                email,
                password: hashedPassword,
            });
            const newUser = yield user.save();
            if (newUser) {
                return res
                    .status(201)
                    .json({ status: "success", data: { user: newUser } });
            }
            return res
                .status(502)
                .json({ status: "error", message: "User not created" });
        });
    },
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const { type, text } = req.body;
            // if (!type || !text) {
            //   return res
            //     .status(400)
            //     .json({ status: "error", message: "Invalid input" });
            // }
            // const id = req.params.id;
            // try {
            //   const User = User.updateOne({ id }, req.body);
            //   return res.status(200).json({ status: "success", data: { User } });
            // } catch (error) {
            //   return res
            //     .status(500)
            //     .json({ status: "error", message: "User not updated" });
            // }
        });
    },
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            if (!email || !password) {
                return res
                    .status(400)
                    .json({ status: "error", message: "Invalid input" });
            }
            const user = yield models_1.User.findOne({ email });
            if (!user) {
                return res
                    .status(404)
                    .json({ status: "error", message: "User not found" });
            }
            const verifiedPassword = yield (0, scrypt_1.verifyPassword)(user.password, password);
            if (!verifiedPassword) {
                return res
                    .status(400)
                    .json({ status: "error", message: "Invalid input" });
            }
            const result = yield models_1.User.deleteOne({ email });
            if (result.deletedCount) {
                return res.status(204).json({ status: "success" });
            }
            return res
                .status(404)
                .json({ status: "error", message: "User not deleted" });
        });
    },
    methodNotAllowed(_, res) {
        return res.status(405).json({
            status: "error",
            message: "Method not allowed",
            path: "api/user",
            allow: ["GET", "POST", "DELETE"],
        });
    },
};
exports.default = userController;
//# sourceMappingURL=user.controller.js.map