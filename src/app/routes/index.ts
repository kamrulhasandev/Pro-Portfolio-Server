import express from "express";
import { SkillRoutes } from "./../modules/Skill/skill.routes";
import { ExperienceRoutes } from "../modules/Experience/experience.routes";
import { ProjectRoutes } from "../modules/Project/project.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/skill",
    route: SkillRoutes,
  },
  {
    path: "/experience",
    route: ExperienceRoutes,
  },
  {
    path: "/project",
    route: ProjectRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
