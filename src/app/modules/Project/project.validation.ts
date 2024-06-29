import { z } from "zod";

const addProjectValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    link: z.string({
      required_error: "Link is required",
    }),
    githubServer: z.string().optional(),
    githubClient: z.string().optional(),
    description: z.string({
      required_error: "Description is required",
    }),
    image: z.string({
      required_error: "Image URL is required",
    }),
    technologies: z.array(z.string()).min(1, {
      message: "At least one technology is required",
    }),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    type: z.enum(["FULL_STACK", "FRONTEND", "BACKEND", "OTHER"], {
      required_error: "Project type is required",
    }),
    isOngoing: z.boolean().optional(),
  }),
});

const updateProjectValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    link: z.string().optional(),
    githubServer: z.string().optional(),
    githubClient: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    technologies: z.array(z.string()).min(1, {
      message: "At least one technology is required",
    }).optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    type: z
      .enum(["FULL_STACK", "FRONTEND", "BACKEND", "OTHER"], {
        required_error: "Project type is required",
      })
      .optional(),
    isOngoing: z.boolean().optional(),
  }),
});

export const ProjectValidations = {
  addProjectValidation,
  updateProjectValidation,
};
