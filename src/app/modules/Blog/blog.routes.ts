import express from "express";
import { BlogController } from "./blog.controller";
import validateRequest from "../../middlewares/validateReqeust";
import { BlogValidations } from "./blog.validation";

const router = express.Router();

router.get("/", BlogController.getAllBlogs);

router.get("/:id", BlogController.getBlog);

router.post(
  "/add-blog",
  validateRequest(BlogValidations.addBlogValidation),
  BlogController.addBlog
);


export const BlogRoutes = router;