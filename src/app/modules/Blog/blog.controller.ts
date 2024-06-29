import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BlogService } from "./blog.service";

const addBlog = catchAsync(async (req: any, res: any) => {
  const result = await BlogService.addBlog(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog added successfully",
    data: result,
  });
});

const getAllBlogs = catchAsync(async (req: any, res: any) => {
  const result = await BlogService.getAllBlogs();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blogs fetched successfully",
    data: result,
  });
});

const getBlog = catchAsync(async (req: any, res: any) => {
  const result = await BlogService.getBlog(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog fetched successfully",
    data: result,
  });
});

export const BlogController = {
  addBlog,
  getAllBlogs,
  getBlog,
};
