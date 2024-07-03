"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HandleZodError = (error) => {
    var _a;
    let message = "";
    let errorDetails = {};
    (_a = error === null || error === void 0 ? void 0 : error.issues) === null || _a === void 0 ? void 0 : _a.forEach((item) => (message += `${item === null || item === void 0 ? void 0 : item.message}. `));
    errorDetails["issues"] = error.issues.map((item) => ({
        field: item.path[1],
        message: item.message,
    }));
    return {
        message: message,
        errorDetails,
    };
};
exports.default = HandleZodError;
