import prisma from "../../prisma/prismaClient.js";

// Cadastrar um novo comentário
export const createComentario = async (data) => {
  const newComentario = await prisma.comentario.create({
    data,
  });
  return newComentario;
};

// Pegar todos os comentários pelo Id do Grupo
export const getAllComentariosByGroupID = async (idGrupo) => {
  const comentarios = await prisma.comentario.findMany({
    where: { grupoId: idGrupo },
  });
  return comentarios;
};

// Buscar um comentário pelo Id
export const getComentarioById = async (idComentario) => {
  const comentario = await prisma.comentario.findUnique({
    where: { id: idComentario },
  });
  return comentario;
};

// Atualizar um comentário
export const updateComentario = async (idComentario, data) => {
  const comentario = await prisma.comentario.update({
    where: { id: idComentario },
    data,
  });
  return comentario;
};

// Deletar um comentário
export const deleteComentario = async (idComentario) => {
  const comentario = await prisma.comentario.delete({
    where: { id: idComentario },
  });
  return comentario;
};
