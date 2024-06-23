import Mensalidade from "../models/MensalidadeModel.js";

//Cadastrar uma nova mensalidade

export const createMensalidade = async (data) => {
  const mensalidade = new Mensalidade(data);
  await mensalidade.save();
  return mensalidade;
};

//Pegar todas as mensalidades de um grupo

export const getAllMensalidadesByGroup = async (idGroup) => {
  const mensalidades = await Mensalidade.find({ grupo: idGroup });
  return mensalidades;
};

//Pegar uma mensalidade pelo Id

export const getMensalidadeById = async (idMensalidade) => {
  const mensalidade = await Mensalidade.findById(idMensalidade);
  return mensalidade;
};

//Atualizar uma mensalidade

export const updateMensalidade = async (idMensalidade, data) => {
  const mensalidade = await Mensalidade.findByIdAndUpdate(idMensalidade, data);
  return mensalidade;
};

//Deletar uma mensalidade

export const deleteMensalidade = async (idMensalidade) => {
  const mensalidade = await Mensalidade.findByIdAndDelete(idMensalidade);
  return mensalidade;
};
