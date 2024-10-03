import prisma from "../../prisma/prismaClient.js";

// Cadastrar um novo kit de ensaio
export const createKit = async (data) => {
  console.log(data);
  const kit = await prisma.kit.create({
    data,
  });
  return kit;
};

// Pegar todos os kits de ensaio pelo Id do Grupo
export const getAllKitsByGroup = async (idGroup) => {
  const kits = await prisma.kit.findMany({
    where: { grupoId: idGroup },
    include: { grupo: true },
  });
  return kits;
};

// Buscar um Kit de ensaio pelo Id
export const getKitById = async (idKit) => {
  const kit = await prisma.kit.findUnique({
    where: { id: idKit },
  });
  return kit;
};

// Atualizar um kit de ensaio
export const updateKit = async (idKit, data) => {
  const kit = await prisma.kit.update({
    where: { id: idKit },
    data,
  });
  return kit;
};

// Deletar um kit de ensaio
export const deleteKit = async (idKit) => {
  const kit = await prisma.kit.delete({
    where: { id: idKit },
  });
  return kit;
};
