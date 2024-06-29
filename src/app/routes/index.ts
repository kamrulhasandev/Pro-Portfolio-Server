import express from "express";
import { SkillRoutes } from './../modules/Skill/skill.routes';


const router = express.Router();

const moduleRoutes = [
    {
        path: "/skill",
        route: SkillRoutes
    }
]



moduleRoutes.forEach(route => router.use(route.path, route.route))


export default router