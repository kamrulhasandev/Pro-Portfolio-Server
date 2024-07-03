"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const envPath = process.env.NODE_ENV === "production"
    ? path_1.default.join(process.cwd(), ".env.prod")
    : path_1.default.join(process.cwd(), ".env");
dotenv_1.default.config({ path: envPath });
exports.default = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    pass_key: process.env.PASS_KEY,
    jwt_secret: process.env.JWT_SECRET,
    jwt_expiration: process.env.EXPIRES_IN,
};
