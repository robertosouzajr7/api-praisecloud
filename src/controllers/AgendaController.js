import {
  createAgenda,
  deleteAgenda,
  getAgendaById,
  getAllAgendasByGroupId,
  updateAgenda,
} from "../services/AgendaService.js";

//Controller de Criar Agenda

export const createAgendaController = async (req, res) => {
  try {
    const agenda = await createAgenda(req.body);
    res.status(201).json(agenda);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Controller de Deletar Agenda

export const deleteAgendaController = async (req, res) => {
  try {
    const agenda = await deleteAgenda(req.params.idAgenda);
    res.status(200).json(agenda);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Controller de Buscar Agenda por ID

export const getAgendaByIdController = async (req, res) => {
  try {
    const agenda = await getAgendaById(req.params.idAgenda);
    res.status(200).json(agenda);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Controller de Buscar todas as agendas de um grupo

export const getAllAgendasByGroupIdController = async (req, res) => {
  try {
    const agendas = await getAllAgendasByGroupId(req.params.idGrupo);
    res.status(200).json(agendas);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Controller de Atualizar Agenda

export const updateAgendaController = async (req, res) => {
  try {
    const agenda = await updateAgenda(req.params.idAgenda, req.body);
    res.status(200).json(agenda);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
