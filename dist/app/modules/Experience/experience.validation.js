"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceValidations = void 0;
const zod_1 = require("zod");
const addExperienceValidation = zod_1.z.object({
    body: zod_1.z.object({
        companyName: zod_1.z.string({
            required_error: "Company name is required",
        }),
        companyLocation: zod_1.z.string({
            required_error: "Company location is required",
        }),
        designation: zod_1.z.string({
            required_error: "Designation is required",
        }),
        jobType: zod_1.z.enum(["FULLTIME", "PARTTIME", "CONTRACT", "INTERNSHIP"], {
            required_error: "Job type is required",
        }),
        jobLocation: zod_1.z.enum(["ON_SITE", "REMOTE", "HYBRID"], {
            required_error: "Job location is required",
        }),
        startDate: zod_1.z.string({ required_error: "Start date is required" }),
        endDate: zod_1.z.string().optional(),
        description: zod_1.z.string({
            required_error: "Description is required",
        }),
        achievements: zod_1.z
            .string({
            required_error: "Achievements are required",
        })
            .optional(),
        isCurrent: zod_1.z.boolean().optional(),
    }),
});
exports.ExperienceValidations = {
    addExperienceValidation,
};
