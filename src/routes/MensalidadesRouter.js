import { Router } from "express";
import {
  createMensalidadeController,
  deleteMensalidadeController,
  getMensalidadeByGrupoController,
  getMensalidadeByIDController,
  updateMensalidadeController,
} from "../controllers/MensalidadesController.js";
import {
  authenticateUser,
  authenticateAdmin,
} from "../middlewares/auth.Middleware.js";

const mensalidadesRouter = Router();

//Rota para criar uma mensalidade

mensalidadesRouter.post("/", authenticateAdmin, createMensalidadeController);

//Rota para deletar uma mensalidade

mensalidadesRouter.delete(
  "/:idMensalidade",
  authenticateAdmin,
  deleteMensalidadeController
);

//Rota para atualizar uma mensalidade

mensalidadesRouter.put(
  "/:idMensalidade",
  authenticateAdmin,
  updateMensalidadeController
);

//Rota para buscar uma mensalidade

mensalidadesRouter.get(
  "/:idMensalidade",
  authenticateUser,
  getMensalidadeByIDController
);

//Rota para buscar uma mensalidade por grupo

mensalidadesRouter.get(
  "/grupo/:idGrupo",
  authenticateUser,
  getMensalidadeByGrupoController
);

export default mensalidadesRouter;
