import Comentario from "../models/ComentarioModel.js";

//Cadastrar um novo comentario

export const createComentario = async (data) => {
  const newComentario = new Comentario(data);
  await newComentario.save();
  return newComentario;
};

//Pegar todos os comentarios pelo Id do Grupo

export const getAllComentariosByGroupID = async (idGrupo) => {
  const comentarios = await Comentario.find({ grupo: idGrupo });
  return comentarios;
};

//Buscar um comentario pelo Id

export const getComentarioById = async (idComentario) => {
  const comentario = await Comentario.findById(idComentario);
  return comentario;
};

//atualizar um comentario

export const updateComentario = async (idComentario, data) => {
  const comentario = await Comentario.findByIdAndUpdate(idComentario, data);
  return comentario;
};

//Deletar um comentario

export const deleteComentario = async (idComentario) => {
  const comentario = await Comentario.findByIdAndDelete(idComentario);
  return comentario;
};
