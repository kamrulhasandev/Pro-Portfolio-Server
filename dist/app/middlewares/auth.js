"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const config_1 = __importDefault(require("../../config"));
const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            throw new AppError_1.default(401, "Access denied. No token provided.");
        }
        jsonwebtoken_1.default.verify(token, config_1.default.jwt_secret, (err, decoded) => {
            if (err) {
                throw new AppError_1.default(401, "Invalid token.");
            }
            else {
                req.user = decoded;
                next();
            }
        });
    }
    catch (error) {
        if (error instanceof AppError_1.default) {
            next(error);
        }
        else {
            next(new AppError_1.default(500, "Internal server error", error));
        }
    }
};
exports.default = auth;
