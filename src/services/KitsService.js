import Kit from "../models/KitModel.js";

//Cadastrar um novo kit de ensaio
export const createKit = async (data) => {
  const kit = await Kit.create(data);
  return kit;
};

//Pegar todos os kits de ensaio pelo Id do Grupo
export const getAllKitsByGroup = async (idGroup) => {
  const kits = await Kit.findAll({ where: { grupoId: idGroup } });
  console.log(kits);
  return kits;
};

//Buscar um Kit de ensaio pelo Id
export const getKitById = async (idKit) => {
  console.log(idKit);
  const kit = await Kit.findByPk(idKit);

  console.log(kit);
  return kit;
};

//Atualizar um kit de ensaio
export const updateKit = async (idKit, data) => {
  await Kit.update(data, { where: { id: idKit } });
  const kit = await Kit.findByPk(idKit);
  return kit;
};

//Deletar um kit de ensaio
export const deleteKit = async (idKit) => {
  const kit = await Kit.destroy({ where: { id: idKit } });
  return kit;
};
