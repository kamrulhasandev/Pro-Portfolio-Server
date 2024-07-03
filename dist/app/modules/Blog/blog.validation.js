"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogValidations = void 0;
const zod_1 = require("zod");
const addBlogValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title Id is required",
        }),
        image: zod_1.z.string({
            required_error: "Image is required",
        }),
        content: zod_1.z.string({
            required_error: "Content is required",
        }),
    }),
});
exports.BlogValidations = {
    addBlogValidation,
};
