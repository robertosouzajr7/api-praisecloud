import Musica from "../models/MusicModel.js";

//Cadastrar uma nova Musica
export const createMusic = async (data) => {
  const newMusic = await Musica.create(data);
  return newMusic;
};

//Pegar uma Musica pelo Id
export const getMusicById = async (idMusic) => {
  const music = await Musica.findByPk(idMusic);
  return music;
};

//Pegar todas as musicas cadastradas
export const getAllMusic = async () => {
  const music = await Musica.findAll();
  return music;
};

//Pegar todas as musicas pelo Id do Grupo
export const getAllMusicByGroup = async (idGroup) => {
  const music = await Musica.findAll({ where: { grupo: idGroup } });
  return music;
};

//Atualizar uma Musica
export const updateMusic = async (idMusic, data) => {
  await Musica.update(data, { where: { id: idMusic } });
  const music = await Musica.findByPk(idMusic);
  return music;
};

//Deletar uma Musica
export const deleteMusic = async (idMusic) => {
  const music = await Musica.destroy({ where: { id: idMusic } });
  return music;
};
