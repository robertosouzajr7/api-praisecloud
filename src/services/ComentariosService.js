import prisma from "../../prisma/prismaClient.js";

// Cadastrar um novo comentário

export const createComentario = async (data) => {
  const { descricao, postId, grupoId, autorId } = data;

  // Verificar se o autor (membro) existe
  const autor = await prisma.member.findUnique({
    where: { id: autorId },
  });
  if (!autor) {
    throw new Error("Autor (Membro) não encontrado");
  }

  // Verificar se o post existe
  const post = await prisma.post.findUnique({
    where: { id: postId },
  });
  if (!post) {
    throw new Error("Post não encontrado");
  }

  // Verificar se o grupo existe
  const grupo = await prisma.group.findUnique({
    where: { id: grupoId },
  });
  if (!grupo) {
    throw new Error("Grupo não encontrado");
  }

  // Criar o comentário
  const newComentario = await prisma.comentario.create({
    data: {
      descricao,
      postId,
      grupoId,
      autorId,
    },
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
