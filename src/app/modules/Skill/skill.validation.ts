import { z } from "zod";

const addSkillValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name Id is required",
    }),
    icon: z.string({
      required_error: "Icon is required",
    }),
    category: z.string({
      required_error: "Category is required",
    }),
    level: z.string({
      required_error: "Level is required",
    }),
  }),
});

export const SkillValidations = {
  addSkillValidation,
};
