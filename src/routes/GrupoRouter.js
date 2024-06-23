import { Router } from "express";

import {
  createGrupoController,
  deleteGrupoController,
  getAllGruposController,
  getGrupoByIDController,
  loginGrupoController,
  updateGrupoController,
} from "../controllers/GrupoController.js";
import {
  authenticateAdmin,
  authenticateUser,
} from "../middlewares/auth.Middleware.js";

const grupoRouter = Router();

//Rota de Criar Grupo
grupoRouter.post("/", createGrupoController);

//Rota de Login Admin Grupo
grupoRouter.post("/login", loginGrupoController);

//Rota de Atualizar Dados do Grupo

grupoRouter.put("/:id", authenticateAdmin, updateGrupoController);

//Rota de Deletar Grupo

grupoRouter.delete("/:id", authenticateAdmin, deleteGrupoController);

//Rota de Pegar Todos os Grupos

grupoRouter.get("/", authenticateAdmin, getAllGruposController);

//Rota de Pegar Grupo pelo ID

grupoRouter.get("/:id", authenticateUser, getGrupoByIDController);

export default grupoRouter;
