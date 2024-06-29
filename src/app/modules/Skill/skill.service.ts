import prisma from "../../../shared/prisma";

const addSkill = async (payload: any) => {
  const skill = await prisma.skill.create({
    data: payload,
  });
  return skill;
};

const getSkills = async () => {
  const skills = await prisma.skill.findMany();
  return skills;
};

export const SkillService = {
  addSkill,
  getSkills,
};
