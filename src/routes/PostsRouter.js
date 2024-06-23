import { Router } from "express";
import {
  createPostController,
  deletePostController,
  getAllPostsByGroupController,
  getAllPostsController,
  getPostByIdController,
  updatePostController,
} from "../controllers/PostsController.js";
import { authenticateUser } from "../middlewares/auth.Middleware.js";

const postRouter = Router();

//Rota para criar um post

postRouter.post("/", authenticateUser, createPostController);

//Rota para listar todos os posts

postRouter.get("/", authenticateUser, getAllPostsController);

//Rota para listar um post pelo Id

postRouter.get("/:id", authenticateUser, getPostByIdController);

//Rota para atualizar um post

postRouter.put("/:id", authenticateUser, updatePostController);

//Rota para deletar um post

postRouter.delete("/:id", authenticateUser, deletePostController);

// Rota para pegar todos os posts de um grupo

postRouter.get("/grupo/:id", authenticateUser, getAllPostsByGroupController);

export default postRouter;
