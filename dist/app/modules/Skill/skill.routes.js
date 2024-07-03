"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillRoutes = void 0;
const express_1 = __importDefault(require("express"));
const skill_controller_1 = require("./skill.controller");
const validateReqeust_1 = __importDefault(require("../../middlewares/validateReqeust"));
const skill_validation_1 = require("./skill.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.get("/", skill_controller_1.SkillController.getAllSkills);
router.post("/add-skill", auth_1.default, (0, validateReqeust_1.default)(skill_validation_1.SkillValidations.addSkillValidation), skill_controller_1.SkillController.addSkill);
exports.SkillRoutes = router;
