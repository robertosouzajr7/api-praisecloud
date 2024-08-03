import Comentario from "../models/ComentarioModel.js";

//Cadastrar um novo comentario
export const createComentario = async (data) => {
  const newComentario = await Comentario.create(data);
  return newComentario;
};

//Pegar todos os comentarios pelo Id do Grupo
export const getAllComentariosByGroupID = async (idGrupo) => {
  const comentarios = await Comentario.findAll({ where: { grupo: idGrupo } });
  return comentarios;
};

//Buscar um comentario pelo Id
export const getComentarioById = async (idComentario) => {
  const comentario = await Comentario.findByPk(idComentario);
  return comentario;
};

//atualizar um comentario
export const updateComentario = async (idComentario, data) => {
  await Comentario.update(data, { where: { id: idComentario } });
  const comentario = await Comentario.findByPk(idComentario);
  return comentario;
};

//Deletar um comentario
export const deleteComentario = async (idComentario) => {
  const comentario = await Comentario.destroy({ where: { id: idComentario } });
  return comentario;
};
