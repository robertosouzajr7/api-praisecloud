import Kit from "../models/KitModel.js";

//cadastrar um novo kit de ensaio
export const createKit = async (data) => {
  const kit = new Kit(data);
  await kit.save();
  return kit;
};
//pegar todos os kits de ensaio pelo Id do Grupo
export const getAllKitsByGroup = async (idGroup) => {
  const kits = await Kit.find({ grupo: idGroup });
  return kits;
};

//Buscar um Kit de ensaio pelo Id
export const getKitById = async (idKit) => {
  const kit = await Kit.findById(idKit);
  return kit;
};

//atualizar um kit de ensaio
export const updateKit = async (idKit, data) => {
  const kit = await Kit.findByIdAndUpdate(idKit, data);
  return kit;
};

//deletar um kit de ensaio
export const deleteKit = async (idKit) => {
  const kit = await Kit.findByIdAndDelete(idKit);
  return kit;
};
