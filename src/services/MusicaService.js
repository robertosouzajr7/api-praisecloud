import prisma from "../../prisma/prismaClient.js";

// Cadastrar uma nova Musica
export const createMusic = async (data) => {
  const newMusic = await prisma.musica.create({
    data,
  });
  return newMusic;
};

// Pegar uma Musica pelo Id
export const getMusicById = async (idMusic) => {
  const music = await prisma.musica.findUnique({
    where: { id: idMusic },
  });
  return music;
};

// Pegar todas as Musicas cadastradas
export const getAllMusic = async () => {
  const music = await prisma.musica.findMany();
  return music;
};

// Pegar todas as Musicas pelo Id do Grupo
export const getAllMusicByGroup = async (idGroup) => {
  const music = await prisma.musica.findMany({
    where: { grupoId: idGroup },
  });
  return music;
};

// Atualizar uma Musica
export const updateMusic = async (idMusic, data) => {
  const music = await prisma.musica.update({
    where: { id: idMusic },
    data,
  });
  return music;
};

// Deletar uma Musica
export const deleteMusic = async (idMusic) => {
  const music = await prisma.musica.delete({
    where: { id: idMusic },
  });
  return music;
};
