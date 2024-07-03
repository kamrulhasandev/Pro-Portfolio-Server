"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillValidations = void 0;
const zod_1 = require("zod");
const addSkillValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name Id is required",
        }),
        icon: zod_1.z.string({
            required_error: "Icon is required",
        }),
        category: zod_1.z.string({
            required_error: "Category is required",
        }),
        level: zod_1.z.string({
            required_error: "Level is required",
        }),
    }),
});
exports.SkillValidations = {
    addSkillValidation,
};
