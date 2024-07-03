import { z } from "zod";

const addExperienceValidation = z.object({
  body: z.object({
    companyName: z.string({
      required_error: "Company name is required",
    }),
    companyLocation: z.string({
      required_error: "Company location is required",
    }),
    designation: z.string({
      required_error: "Designation is required",
    }),
    jobType: z.enum(["FULLTIME", "PARTTIME", "CONTRACT", "INTERNSHIP"], {
      required_error: "Job type is required",
    }),
    jobLocation: z.enum(["ON_SITE", "REMOTE", "HYBRID"], {
      required_error: "Job location is required",
    }),
    startDate: z.string({ required_error: "Start date is required" }),
    endDate: z.string().optional(),

    description: z.string({
      required_error: "Description is required",
    }),
    achievements: z
      .string({
        required_error: "Achievements are required",
      })
      .optional(),
    isCurrent: z.boolean().optional(),
  }),
});

export const ExperienceValidations = {
  addExperienceValidation,
};
