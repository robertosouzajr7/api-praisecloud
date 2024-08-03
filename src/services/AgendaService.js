import Agenda from "../models/AgendaModel.js";

//Cadastrar uma nova agenda
export const createAgenda = async (data) => {
  const newAgenda = await Agenda.create(data);
  return newAgenda;
};

//Pegar todas as agendas cadastradas pelo ID Group
export const getAllAgendasByGroupId = async (groupId) => {
  const agendas = await Agenda.findAll({ where: { grupo: groupId } });
  return agendas;
};

//Buscar uma agenda pelo Id
export const getAgendaById = async (idAgenda) => {
  const agenda = await Agenda.findByPk(idAgenda);
  return agenda;
};

//atualizar uma agenda
export const updateAgenda = async (idAgenda, data) => {
  await Agenda.update(data, { where: { id: idAgenda } });
  const agenda = await Agenda.findByPk(idAgenda);
  return agenda;
};

//deletar uma agenda
export const deleteAgenda = async (idAgenda) => {
  const agenda = await Agenda.destroy({ where: { id: idAgenda } });
  return agenda;
};
