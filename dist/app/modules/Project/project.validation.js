"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectValidations = void 0;
const zod_1 = require("zod");
const addProjectValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is required",
        }),
        link: zod_1.z.string({
            required_error: "Link is required",
        }),
        githubServer: zod_1.z.string().optional(),
        githubClient: zod_1.z.string().optional(),
        description: zod_1.z.string({
            required_error: "Description is required",
        }),
        image: zod_1.z.string({
            required_error: "Image URL is required",
        }),
        technologies: zod_1.z.array(zod_1.z.string()).min(1, {
            message: "At least one technology is required",
        }),
        startDate: zod_1.z.string().optional(),
        endDate: zod_1.z.string().optional(),
        type: zod_1.z.enum(["FULL_STACK", "FRONTEND", "BACKEND", "OTHER"], {
            required_error: "Project type is required",
        }),
        isOngoing: zod_1.z.boolean().optional(),
    }),
});
const updateProjectValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        link: zod_1.z.string().optional(),
        githubServer: zod_1.z.string().optional(),
        githubClient: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        image: zod_1.z.string().optional(),
        technologies: zod_1.z.array(zod_1.z.string()).min(1, {
            message: "At least one technology is required",
        }).optional(),
        startDate: zod_1.z.string().optional(),
        endDate: zod_1.z.string().optional(),
        type: zod_1.z
            .enum(["FULL_STACK", "FRONTEND", "BACKEND", "OTHER"], {
            required_error: "Project type is required",
        })
            .optional(),
        isOngoing: zod_1.z.boolean().optional(),
    }),
});
exports.ProjectValidations = {
    addProjectValidation,
    updateProjectValidation,
};
