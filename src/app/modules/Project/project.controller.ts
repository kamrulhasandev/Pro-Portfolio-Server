import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ProjectService } from "./project.service";

const addProject = catchAsync(async (req: any, res: any) => {
  const result = await ProjectService.addProject(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project added successfully",
    data: result,
  });
});

const getAllProjects = catchAsync(async (req: any, res: any) => {
  const result = await ProjectService.getAllProjects();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Projects fetched successfully",
    data: result,
  });
});

const getProject = catchAsync(async (req: any, res: any) => {
  const result = await ProjectService.getProject(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project fetched successfully",
    data: result,
  });
});

const updateProject = catchAsync(async (req: any, res: any) => {
  const result = await ProjectService.updateProject(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project updated successfully",
    data: result,
  });
});

const deleteProject = catchAsync(async (req: any, res: any) => {
  const result = await ProjectService.deleteProject(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project deleted successfully",
    data: result,
  });
});

export const ProjectController = {
  addProject,
  getAllProjects,
  getProject,
  updateProject,
  deleteProject,
};
