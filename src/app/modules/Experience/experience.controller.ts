import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ExperienceService } from "./experience.service";

const addExperience = catchAsync(async (req: any, res: any) => {
  const result = await ExperienceService.addExperience(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Experience added successfully",
    data: result,
  });
});

const getExperiences = catchAsync(async (req: any, res: any) => {
  const result = await ExperienceService.getExperiences();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Experiences fetched successfully",
    data: result,
  });
});

export const ExperienceController = {
  addExperience,
  getExperiences,
};
