import express from "express";
import { ProjectController } from "./project.controller";
import validateRequest from "../../middlewares/validateReqeust";
import { ProjectValidations } from "./project.validation";

const router = express.Router();

router.get("/", ProjectController.getAllProjects);

router.get("/:id", ProjectController.getProject);

router.post(
  "/add-project",
  validateRequest(ProjectValidations.addProjectValidation),
  ProjectController.addProject
);

router.put(
  "/update-project/:id",
  validateRequest(ProjectValidations.updateProjectValidation),
  ProjectController.updateProject
);

router.delete("/delete-project/:id", ProjectController.deleteProject);

export const ProjectRoutes = router;
