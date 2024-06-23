import {
  createComentario,
  deleteComentario,
  getAllComentariosByGroupID,
  getComentarioById,
  updateComentario,
} from "../services/ComentariosService.js";

// Controller de Criar Comentario

export const createComentarioController = async (req, res) => {
  try {
    const comentario = await createComentario(req.body);
    res.status(201).json(comentario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller de Deletar Comentario

export const deleteComentarioController = async (req, res) => {
  try {
    const comentario = await deleteComentario(req.params.idComentario);
    res.status(200).json(comentario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller de Listar Comentarios

export const getAllComentariosByGroupIDController = async (req, res) => {
  try {
    const comentarios = await getAllComentariosByGroupID(req.params.idGrupo);
    res.status(200).json(comentarios);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller de Listar Comentario

export const getComentarioByIdController = async (req, res) => {
  try {
    const comentario = await getComentarioById(req.params.idComentario);
    res.status(200).json(comentario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller de Atualizar Comentario

export const updateComentarioController = async (req, res) => {
  try {
    const comentario = await updateComentario(
      req.params.idComentario,
      req.body
    );
    res.status(200).json(comentario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
