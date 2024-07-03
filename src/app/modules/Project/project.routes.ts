import express from "express";
import { ProjectController } from "./project.controller";
import validateRequest from "../../middlewares/validateReqeust";
import { ProjectValidations } from "./project.validation";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get("/", ProjectController.getAllProjects);

router.get("/:id", ProjectController.getProject);

router.post(
  "/add-project",
  auth,
  validateRequest(ProjectValidations.addProjectValidation),
  ProjectController.addProject
);

router.put(
  "/update-project/:id",
  auth,
  validateRequest(ProjectValidations.updateProjectValidation),
  ProjectController.updateProject
);

router.delete("/delete-project/:id", auth, ProjectController.deleteProject);

export const ProjectRoutes = router;
