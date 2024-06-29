import prisma from "../../../shared/prisma";

const addBlog = async (payload: any) => {
  const blog = await prisma.blog.create({
    data: payload,
  });
  return blog;
};

const getAllBlogs = async () => {
  const blogs = await prisma.blog.findMany();
  return blogs;
};

const getBlog = async (id: string) => {
  const blog = await prisma.blog.findUnique({
    where: {
      id: id,
    },
  });
  return blog;
};

export const BlogService = {
  addBlog,
  getAllBlogs,
  getBlog,
};
