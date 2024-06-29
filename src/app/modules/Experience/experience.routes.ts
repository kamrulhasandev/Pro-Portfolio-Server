import express from "express";
import validateRequest from "../../middlewares/validateReqeust";
import { ExperienceController } from "./experience.controller";
import { ExperienceValidations } from "./experience.validation";

const router = express.Router();

router.get("/", ExperienceController.getExperiences);

router.post(
  "/add-experience",
  validateRequest(ExperienceValidations.addExperienceValidation),
  ExperienceController.addExperience
);

export const ExperienceRoutes = router;
