import express from "express";
import { SkillController } from "./skill.controller";
import validateRequest from "../../middlewares/validateReqeust";
import { SkillValidations } from "./skill.validation";

const router = express.Router();

router.get("/", SkillController.getAllSkills);

router.post(
  "/add-skill",
  validateRequest(SkillValidations.addSkillValidation),
  SkillController.addSkill
);



export const SkillRoutes = router;