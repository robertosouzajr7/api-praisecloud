import prisma from "../../prisma/prismaClient.js";

// Cadastrar um novo post
export const createPost = async (data) => {
  const newPost = await prisma.post.create({
    data,
  });
  return newPost;
};

// Pegar todos os posts
export const getAllPosts = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};

// Pegar todos os posts de um grupo
export const getAllPostsByGroup = async (idGroup) => {
  const posts = await prisma.post.findMany({
    where: { grupoId: idGroup },
  });
  return posts;
};

// Pegar um post pelo Id
export const getPostById = async (idPost) => {
  const post = await prisma.post.findUnique({
    where: { id: idPost },
  });
  return post;
};

// Atualizar um post
export const updatePost = async (idPost, data) => {
  const post = await prisma.post.update({
    where: { id: idPost },
    data,
  });
  return post;
};

// Deletar um post
export const deletePost = async (idPost) => {
  const post = await prisma.post.delete({
    where: { id: idPost },
  });
  return post;
};
