"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const skill_routes_1 = require("./../modules/Skill/skill.routes");
const experience_routes_1 = require("../modules/Experience/experience.routes");
const project_routes_1 = require("../modules/Project/project.routes");
const blog_routes_1 = require("../modules/Blog/blog.routes");
const auth_routes_1 = require("../modules/auth/auth.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/skill",
        route: skill_routes_1.SkillRoutes,
    },
    {
        path: "/experience",
        route: experience_routes_1.ExperienceRoutes,
    },
    {
        path: "/project",
        route: project_routes_1.ProjectRoutes,
    },
    {
        path: "/blog",
        route: blog_routes_1.BlogRoutes,
    },
    {
        path: "/auth",
        route: auth_routes_1.AuthRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
