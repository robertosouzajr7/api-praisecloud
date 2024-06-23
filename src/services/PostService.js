import Posts from "../models/PostModel.js";

//Cadastrar um novo post

export const createPost = async (data) => {
  const newPost = new Posts(data);
  await newPost.save();
  return newPost;
};

//Pegar todos os posts

export const getAllPosts = async () => {
  const posts = await Posts.find();
  return posts;
};

//Pegar todos os posts de um grupo

export const getAllPostsByGroup = async (idGroup) => {
  const posts = await Posts.find({ grupo: idGroup });
  return posts;
};

//Pegar um post pelo Id

export const getPostById = async (idPost) => {
  const post = await Posts.findById(idPost);
  return post;
};

//atualizar um post

export const updatePost = async (idPost, data) => {
  const post = await Posts.findByIdAndUpdate(idPost, data);
  return post;
};

//deletar um post

export const deletePost = async (idPost) => {
  const post = await Posts.findByIdAndDelete(idPost);
  return post;
};
