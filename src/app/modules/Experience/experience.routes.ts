import express from "express";
import validateRequest from "../../middlewares/validateReqeust";
import { ExperienceController } from "./experience.controller";
import { ExperienceValidations } from "./experience.validation";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get("/", ExperienceController.getExperiences);

router.post(
  "/add-experience",
  auth,
  validateRequest(ExperienceValidations.addExperienceValidation),
  ExperienceController.addExperience
);

export const ExperienceRoutes = router;
