import Mensalidade from "../models/MensalidadeModel.js";

//Cadastrar uma nova mensalidade
export const createMensalidade = async (data) => {
  const mensalidade = await Mensalidade.create(data);
  return mensalidade;
};

//Pegar todas as mensalidades de um grupo
export const getAllMensalidadesByGroup = async (idGroup) => {
  const mensalidades = await Mensalidade.findAll({ where: { grupo: idGroup } });
  return mensalidades;
};

//Pegar uma mensalidade pelo Id
export const getMensalidadeById = async (idMensalidade) => {
  const mensalidade = await Mensalidade.findByPk(idMensalidade);
  return mensalidade;
};

//Atualizar uma mensalidade
export const updateMensalidade = async (idMensalidade, data) => {
  await Mensalidade.update(data, { where: { id: idMensalidade } });
  const mensalidade = await Mensalidade.findByPk(idMensalidade);
  return mensalidade;
};

//Deletar uma mensalidade
export const deleteMensalidade = async (idMensalidade) => {
  const mensalidade = await Mensalidade.destroy({
    where: { id: idMensalidade },
  });
  return mensalidade;
};
