import express from "express";
import { SkillRoutes } from "./../modules/Skill/skill.routes";
import { ExperienceRoutes } from "../modules/Experience/experience.routes";
import { ProjectRoutes } from "../modules/Project/project.routes";
import { BlogRoutes } from "../modules/Blog/blog.routes";

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
  {
    path: "/blog",
    route: BlogRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
