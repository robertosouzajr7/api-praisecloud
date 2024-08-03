import Post from "../models/PostModel.js";

//Cadastrar um novo post
export const createPost = async (data) => {
  const newPost = await Post.create(data);
  return newPost;
};

//Pegar todos os posts
export const getAllPosts = async () => {
  const posts = await Post.findAll();
  return posts;
};

//Pegar todos os posts de um grupo
export const getAllPostsByGroup = async (idGroup) => {
  const posts = await Post.findAll({ where: { grupo: idGroup } });
  return posts;
};

//Pegar um post pelo Id
export const getPostById = async (idPost) => {
  const post = await Post.findByPk(idPost);
  return post;
};

//Atualizar um post
export const updatePost = async (idPost, data) => {
  await Post.update(data, { where: { id: idPost } });
  const post = await Post.findByPk(idPost);
  return post;
};

//Deletar um post
export const deletePost = async (idPost) => {
  const post = await Post.destroy({ where: { id: idPost } });
  return post;
};
