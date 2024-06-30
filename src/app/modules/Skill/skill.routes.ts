import express from "express";
import { SkillController } from "./skill.controller";
import validateRequest from "../../middlewares/validateReqeust";
import { SkillValidations } from "./skill.validation";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get("/", auth, SkillController.getAllSkills);

router.post(
  "/add-skill",
  validateRequest(SkillValidations.addSkillValidation),
  SkillController.addSkill
);

export const SkillRoutes = router;
