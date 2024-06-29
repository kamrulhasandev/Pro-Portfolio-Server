import prisma from "./../../../shared/prisma";

const addProject = async (payload: any) => {
  const project = await prisma.project.create({
    data: payload,
  });
  return project;
};

const getAllProjects = async () => {
  const projects = await prisma.project.findMany();
  return projects;
};

const getProject = async (id: string) => {
  const project = await prisma.project.findUnique({
    where: {
      id: id,
    },
  });
  return project;
};

const updateProject = async (id: string, payload: any) => {
  const project = await prisma.project.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return project;
};

const deleteProject = async (id: string) => {
  const project = await prisma.project.delete({
    where: {
      id: id,
    },
  });
  return project;
};

export const ProjectService = {
  addProject,
  getAllProjects,
  getProject,
  updateProject,
  deleteProject,
};
