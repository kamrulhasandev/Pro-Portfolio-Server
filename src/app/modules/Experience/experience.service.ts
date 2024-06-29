import prisma from "../../../shared/prisma";

const addExperience = async (payload: any) => {
  const experience = await prisma.experience.create({
    data: payload,
  });
  return experience;
};


const getExperiences = async () => {
  const experiences = await prisma.experience.findMany();
  return experiences;
};



export const ExperienceService = {
  addExperience,
  getExperiences,
}