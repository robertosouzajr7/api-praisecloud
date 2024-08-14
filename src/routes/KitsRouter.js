import { Router } from "express";
import {
  createKitController,
  deleteKitController,
  getAllKitsByGroupController,
  getKitByIdController,
  updateKitController,
} from "../controllers/KitsController.js";
import {
  authenticateUser,
  authenticateAdmin,
} from "../middlewares/auth.Middleware.js";

const kitRouter = Router();

//Rota de Criar um novo kit

kitRouter.post("/", authenticateAdmin, createKitController);

//Rota de Deletar um kit

kitRouter.delete("/:id", authenticateAdmin, deleteKitController);

//Rota de Atualizar um kit

kitRouter.put("/:id", authenticateAdmin, updateKitController);

//Rota de Pegar todos os kits de um grupo

kitRouter.get(
  "/grupos/:idGrupo",
  authenticateUser,
  getAllKitsByGroupController
);

//Rota de Pegar um kit pelo Id

kitRouter.get("/:idKit", authenticateUser, getKitByIdController);

export default kitRouter;
