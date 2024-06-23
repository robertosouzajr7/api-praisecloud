import Musica from "../models/MusicModel.js";

//Cadastrar uma nova Musica

export const createMusic = async (data) => {
  const newMusic = new Musica(data);
  await newMusic.save();
  return newMusic;
};

//Pegar uma Musica pelo Id

export const getMusicById = async (idMusic) => {
  const music = await Musica.findById(idMusic);
  return music;
};

//Pegar todas as musicas cadastradas

export const getAllMusic = async () => {
  const music = await Musica.find();
  return music;
};

//Pegar todas as musicas pelo Id do Grupo

export const getAllMusicByGroup = async (idGroup) => {
  const music = await Musica.find({ grupo: idGroup });
  return music;
};

//Atualizar uma Musica

export const updateMusic = async (idMusic, data) => {
  const music = await Musica.findByIdAndUpdate(idMusic, data);
  return music;
};

//Deletar uma Musica

export const deleteMusic = async (idMusic) => {
  const music = await Musica.findByIdAndDelete(idMusic);
  return music;
};
