import {
  createMusic,
  getAllMusic,
  deleteMusic,
  getMusicById,
  getAllMusicByGroup,
  updateMusic,
} from "../services/MusicaService.js";

// Controller de Criar Musica

export const createMusicController = async (req, res) => {
  try {
    const music = await createMusic(req.body);
    res.status(201).json(music);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller de Deletar Musica

export const deleteMusicController = async (req, res) => {
  try {
    const music = await deleteMusic(req.params.id);
    res.status(200).json(music);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller de Atualizar Musica

export const updateMusicController = async (req, res) => {
  try {
    const music = await updateMusic(req.params.id, req.body);
    res.status(200).json(music);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller de Pegar Musica por ID

export const getMusicByIdController = async (req, res) => {
  try {
    const music = await getMusicById(req.params.id);
    res.status(200).json(music);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller de Pegar Todas as Musica

export const getAllMusicController = async (req, res) => {
  try {
    const music = await getAllMusic();
    res.status(200).json(music);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller de Pegar Todas as Musica por Grupo

export const getAllMusicByGroupController = async (req, res) => {
  try {
    const music = await getAllMusicByGroup(req.params.id);
    res.status(200).json(music);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
