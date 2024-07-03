"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateReqeust_1 = __importDefault(require("../../middlewares/validateReqeust"));
const experience_controller_1 = require("./experience.controller");
const experience_validation_1 = require("./experience.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.get("/", experience_controller_1.ExperienceController.getExperiences);
router.post("/add-experience", auth_1.default, (0, validateReqeust_1.default)(experience_validation_1.ExperienceValidations.addExperienceValidation), experience_controller_1.ExperienceController.addExperience);
exports.ExperienceRoutes = router;
