import Agendas from "../models/AgendaModel.js";

//Cadastrar uma nova agenda

export const createAgenda = async (data) => {
  const newAgenda = new Agendas(data);
  await newAgenda.save();
  return newAgenda;
};

//Pegar todas as agendas cadastradas pelo ID Group

export const getAllAgendasByGroupId = async (groupId) => {
  const agendas = await Agendas.find({ grupo: groupId });
  return agendas;
};

//Buscar uma agenda pelo Id

export const getAgendaById = async (idAgenda) => {
  const agenda = await Agendas.findById(idAgenda);
  return agenda;
};

//atualizar uma agenda

export const updateAgenda = async (idAgenda, data) => {
  const agenda = await Agendas.findByIdAndUpdate(idAgenda, data);
  return agenda;
};

//deletar uma agenda

export const deleteAgenda = async (idAgenda) => {
  const agenda = await Agendas.findByIdAndDelete(idAgenda);
  return agenda;
};
