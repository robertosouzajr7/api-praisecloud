import {
  createMembroController,
  deleteMembroController,
  getAllMembrosByGroupIDController,
  getMembroByIdController,
  loginMembroController,
  updateMembroController,
} from "../controllers/MembrosController.js";
import {
  authenticateUser,
  authenticateAdmin,
} from "../middlewares/auth.Middleware.js";

import { Router } from "express";

const membroRouter = Router();

//Rota de Criar membro
membroRouter.post("/", createMembroController);

//Rota de Deletar membro
membroRouter.delete("/:idMembro", authenticateAdmin, deleteMembroController);

//Rota de Pegar todos os membros de um grupo
membroRouter.get(
  "/membro/grupo/:idGrupo",
  authenticateUser,
  getAllMembrosByGroupIDController
);

//Rota de Pegar um membro pelo Id
membroRouter.get("/:idMembro", authenticateUser, getMembroByIdController);

//Rota de Login
membroRouter.post("/login", loginMembroController);

//Rota de Atualizar membro
membroRouter.put("/:idMembro", authenticateUser, updateMembroController);

export default membroRouter;
