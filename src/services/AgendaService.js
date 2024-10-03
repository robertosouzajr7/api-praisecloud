import prisma from "../../prisma/prismaClient.js";

// Cadastrar uma nova agenda
export const createAgenda = async (data) => {
  const newAgenda = await prisma.agenda.create({
    data,
  });
  return newAgenda;
};

// Pegar todas as agendas cadastradas pelo ID Group
export const getAllAgendasByGroupId = async (groupId) => {
  const agendas = await prisma.agenda.findMany({
    where: { grupoId: groupId },
  });
  return agendas;
};

// Buscar uma agenda pelo Id
export const getAgendaById = async (idAgenda) => {
  const agenda = await prisma.agenda.findUnique({
    where: { id: idAgenda },
  });
  return agenda;
};

// Atualizar uma agenda
export const updateAgenda = async (idAgenda, data) => {
  const agenda = await prisma.agenda.update({
    where: { id: idAgenda },
    data,
  });
  return agenda;
};

// Deletar uma agenda
export const deleteAgenda = async (idAgenda) => {
  const agenda = await prisma.agenda.delete({
    where: { id: idAgenda },
  });
  return agenda;
};
