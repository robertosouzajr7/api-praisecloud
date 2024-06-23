import { Router } from "express";
import {
  createComentarioController,
  deleteComentarioController,
  getAllComentariosByGroupIDController,
  getComentarioByIdController,
  updateComentarioController,
} from "../controllers/ComentariosController.js";
import { authenticateUser } from "../middlewares/auth.Middleware.js";

const commentarioRouter = Router();

//Rota para criar um comentario

commentarioRouter.post("/", authenticateUser, createComentarioController);

//Rota para deletar um comentario

commentarioRouter.delete(
  "/:idComentario",
  authenticateUser,
  deleteComentarioController
);

//Rota para pegar todos os comentarios pelo id do grupo

commentarioRouter.get(
  "/:idGrupo",
  authenticateUser,
  getAllComentariosByGroupIDController
);

//Rota para pegar um comentario pelo id

commentarioRouter.get(
  "/:idComentario",
  authenticateUser,
  getComentarioByIdController
);

//Rota para atualizar um comentario

commentarioRouter.put(
  "/:idComentario",
  authenticateUser,
  updateComentarioController
);

export default commentarioRouter;
