"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const addExperience = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const experience = yield prisma_1.default.experience.create({
        data: payload,
    });
    return experience;
});
const getExperiences = () => __awaiter(void 0, void 0, void 0, function* () {
    const experiences = yield prisma_1.default.experience.findMany();
    return experiences;
});
exports.ExperienceService = {
    addExperience,
    getExperiences,
};
