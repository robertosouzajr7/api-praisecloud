import {
  createMembro,
  deleteMembro,
  getAllMembrosByGroupID,
  loginMembro,
  getMembroById,
  updateMembro,
} from "../services/MembroService.js";

//Controller de Criar membro

export const createMembroController = async (req, res) => {
  try {
    const membro = await createMembro(req.body);
    res.status(201).json(membro);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller de Login do membro

export const loginMembroController = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const membro = await loginMembro(email, senha);
    res.status(200).json(membro);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Controller de Buscar membro pelo Id

export const getMembroByIdController = async (req, res) => {
  try {
    const membro = await getMembroById(req.params.id);
    res.status(200).json(membro);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Controller de Atualizar membro

export const updateMembroController = async (req, res) => {
  try {
    const membro = await updateMembro(req.params.id, req.body);
    res.status(200).json(membro);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Controller de Deletar membro

export const deleteMembroController = async (req, res) => {
  try {
    const membro = await deleteMembro(req.params.id);
    res.status(200).json(membro);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller de Buscar todos os Membros pelo Id do grupo

export const getAllMembrosByGroupIDController = async (req, res) => {
  try {
    const membros = await getAllMembrosByGroupID(req.params.id);
    res.status(200).json(membros);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
