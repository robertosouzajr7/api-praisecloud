import prisma from "../../prisma/prismaClient.js";

// Cadastrar uma nova mensalidade
export const createMensalidade = async (data) => {
  const mensalidade = await prisma.mensalidade.create({
    data,
  });
  return mensalidade;
};

// Pegar todas as mensalidades de um grupo
export const getAllMensalidadesByGroup = async (idGroup) => {
  const mensalidades = await prisma.mensalidade.findMany({
    where: { grupoId: idGroup },
  });
  return mensalidades;
};

// Pegar uma mensalidade pelo Id
export const getMensalidadeById = async (idMensalidade) => {
  const mensalidade = await prisma.mensalidade.findUnique({
    where: { id: idMensalidade },
  });
  return mensalidade;
};

// Atualizar uma mensalidade
export const updateMensalidade = async (idMensalidade, data) => {
  const mensalidade = await prisma.mensalidade.update({
    where: { id: idMensalidade },
    data,
  });
  return mensalidade;
};

// Deletar uma mensalidade
export const deleteMensalidade = async (idMensalidade) => {
  const mensalidade = await prisma.mensalidade.delete({
    where: { id: idMensalidade },
  });
  return mensalidade;
};
