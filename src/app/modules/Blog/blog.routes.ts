import express from "express";
import { BlogController } from "./blog.controller";
import validateRequest from "../../middlewares/validateReqeust";
import { BlogValidations } from "./blog.validation";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get("/", BlogController.getAllBlogs);

router.get("/:id", BlogController.getBlog);

router.post(
  "/add-blog",
  auth,
  validateRequest(BlogValidations.addBlogValidation),
  BlogController.addBlog
);

export const BlogRoutes = router;
