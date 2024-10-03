import {
  createPost,
  deletePost,
  getAllPosts,
  getAllPostsByGroup,
  getPostById,
  updatePost,
} from "../services/PostService.js";

// Controller de Criar post

export const createPostController = async (req, res) => {
  try {
    const post = await createPost(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller de Deletar post

export const deletePostController = async (req, res) => {
  try {
    const post = await deletePost(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller de Pegar todos os posts

export const getAllPostsController = async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller de Pegar todos os posts por grupo

export const getAllPostsByGroupController = async (req, res) => {
  try {
    const posts = await getAllPostsByGroup(req.params.id);
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller de Pegar um post pelo Id

export const getPostByIdController = async (req, res) => {
  try {
    const post = await getPostById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller de Atualizar um post

export const updatePostController = async (req, res) => {
  try {
    const post = await updatePost(req.params.id, req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
