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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const config_1 = __importDefault(require("../../../config"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = __importDefault(require("crypto"));
const http_status_1 = require("http-status");
const validatePasskey = (passkey) => {
    const storedPasskey = Buffer.from(config_1.default.pass_key);
    const inputPasskey = Buffer.from(passkey);
    if (storedPasskey.length !== inputPasskey.length) {
        throw new AppError_1.default(http_status_1.BAD_REQUEST, "Passkey length mismatch");
    }
    return crypto_1.default.timingSafeEqual(storedPasskey, inputPasskey);
};
const login = (passKey) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isValid = validatePasskey(passKey);
        if (!isValid) {
            throw new AppError_1.default(http_status_1.BAD_REQUEST, "Invalid passkey");
        }
        const token = jsonwebtoken_1.default.sign({}, config_1.default.jwt_secret, {
            expiresIn: config_1.default.jwt_expiration,
        });
        return {
            token: token,
        };
    }
    catch (error) {
        if (error instanceof AppError_1.default) {
            throw error;
        }
        else if (error instanceof TypeError &&
            error.message.includes("timingSafeEqual")) {
            throw new AppError_1.default(http_status_1.BAD_REQUEST, "Invalid passkey format", error.message);
        }
        else {
            throw new AppError_1.default(http_status_1.BAD_REQUEST, "Invalid passkey");
        }
    }
});
exports.AuthService = {
    login,
};
