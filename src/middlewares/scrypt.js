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
exports.hashPassword = hashPassword;
exports.verifyPassword = verifyPassword;
const node_crypto_1 = require("node:crypto");
const node_util_1 = require("node:util");
const scryptAsync = (0, node_util_1.promisify)(node_crypto_1.scrypt);
const KEY_LENGTH = 64;
const SALT_LENGTH = 16;
function hashPassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!password) {
            throw new Error("Password is required");
        }
        try {
            const salt = (0, node_crypto_1.randomBytes)(SALT_LENGTH).toString("hex");
            const buffer = (yield scryptAsync(password, salt, KEY_LENGTH));
            return `${buffer.toString("hex")}.${salt}`;
        }
        catch (error) {
            throw new Error("Error hashing password");
        }
    });
}
function verifyPassword(hashedPassword, password) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!hashedPassword || !password) {
            throw new Error("Invalid input");
        }
        try {
            const [hash, salt] = hashedPassword.split(".");
            if (!hash || !salt) {
                throw new Error("Invalid hashed password");
            }
            const buffer = (yield scryptAsync(password, salt, KEY_LENGTH));
            return (0, node_crypto_1.timingSafeEqual)(Buffer.from(hash, "hex"), buffer);
        }
        catch (error) {
            throw new Error("Error verifying password");
        }
    });
}
