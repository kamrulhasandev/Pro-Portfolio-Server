import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { SkillService } from "./skill.service";
import { Request, Response } from "express";

const addSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillService.addSkill(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill added successfully",
    data: result,
  });
});

const getAllSkills = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillService.getSkills();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skills fetched successfully",
    data: result,
  });
});

export const SkillController = {
  addSkill,
  getAllSkills,
};
