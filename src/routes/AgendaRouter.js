import { Router } from "express";

import {
  createAgendaController,
  deleteAgendaController,
  getAgendaByIdController,
  getAllAgendasByGroupIdController,
  updateAgendaController,
} from "../controllers/AgendaController.js";
import {
  authenticateUser,
  authenticateAdmin,
} from "../middlewares/auth.Middleware.js";

const agendaRouter = Router();

//Rota para criar uma data na Agenda

agendaRouter.post("/", authenticateAdmin, createAgendaController);

//Rota para deletar uma data na Agenda

agendaRouter.delete("/:idAgenda", authenticateAdmin, deleteAgendaController);

//Rota para buscar uma data na Agenda

agendaRouter.get("/:idAgenda", authenticateUser, getAgendaByIdController);

//Rota para buscar todas as datas na Agenda

agendaRouter.get("/", authenticateUser, getAllAgendasByGroupIdController);

//Rota para atualizar uma data na Agenda

agendaRouter.put("/:idAgenda", authenticateAdmin, updateAgendaController);

export default agendaRouter;
