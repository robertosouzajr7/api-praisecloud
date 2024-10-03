import { Router } from "express";

import {
  createMusicController,
  deleteMusicController,
  getAllMusicByGroupController,
  getMusicByIdController,
  updateMusicController,
  getAllMusicController,
} from "../controllers/MusicasController.js";
import {
  authenticateUser,
  authenticateAdmin,
} from "../middlewares/auth.Middleware.js";

const musicasRouter = Router();

// Rota para criar uma musica

musicasRouter.post("/", authenticateAdmin, createMusicController);

// Rota para deletar uma musica

musicasRouter.delete("/:id", authenticateAdmin, deleteMusicController);

// Rota para atualizar uma musica

musicasRouter.put("/:id", authenticateAdmin, updateMusicController);

// Rota para buscar todas as musicas

musicasRouter.get("/", authenticateUser, getAllMusicController);

// Rota para buscar uma musica pelo id

musicasRouter.get("/:id", authenticateUser, getMusicByIdController);

// Rota para buscar todas as musicas do grupo

musicasRouter.get(
  "/:id/musica",
  authenticateUser,
  getAllMusicByGroupController
);

export default musicasRouter;
