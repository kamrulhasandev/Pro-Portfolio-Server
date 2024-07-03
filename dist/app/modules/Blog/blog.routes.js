"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const validateReqeust_1 = __importDefault(require("../../middlewares/validateReqeust"));
const blog_validation_1 = require("./blog.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.get("/", blog_controller_1.BlogController.getAllBlogs);
router.get("/:id", blog_controller_1.BlogController.getBlog);
router.post("/add-blog", auth_1.default, (0, validateReqeust_1.default)(blog_validation_1.BlogValidations.addBlogValidation), blog_controller_1.BlogController.addBlog);
exports.BlogRoutes = router;
