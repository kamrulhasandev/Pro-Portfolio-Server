"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoutes = void 0;
const express_1 = __importDefault(require("express"));
const project_controller_1 = require("./project.controller");
const validateReqeust_1 = __importDefault(require("../../middlewares/validateReqeust"));
const project_validation_1 = require("./project.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.get("/", project_controller_1.ProjectController.getAllProjects);
router.get("/:id", project_controller_1.ProjectController.getProject);
router.post("/add-project", auth_1.default, (0, validateReqeust_1.default)(project_validation_1.ProjectValidations.addProjectValidation), project_controller_1.ProjectController.addProject);
router.put("/update-project/:id", auth_1.default, (0, validateReqeust_1.default)(project_validation_1.ProjectValidations.updateProjectValidation), project_controller_1.ProjectController.updateProject);
router.delete("/delete-project/:id", auth_1.default, project_controller_1.ProjectController.deleteProject);
exports.ProjectRoutes = router;
