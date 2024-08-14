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
    const { idMembro } = req.params;
    const membro = await getMembroById(idMembro);
    res.status(200).json(membro);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Controller de Atualizar membro
export const updateMembroController = async (req, res) => {
  try {
    const { idMembro } = req.params;
    const membro = await updateMembro(idMembro, req.body);
    res.status(200).json(membro);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Controller de Deletar membro
export const deleteMembroController = async (req, res) => {
  try {
    const { idMembro } = req.params;
    const membro = await deleteMembro(idMembro);
    res.status(200).json(membro);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller de Buscar todos os Membros pelo Id do grupo
export const getAllMembrosByGroupIDController = async (req, res) => {
  try {
    const { idGrupo } = req.params; // Captura o ID do grupo da URL

    if (!idGrupo) {
      return res.status(400).json({ message: "ID do grupo não fornecido" });
    }

    const membros = await getAllMembrosByGroupID(idGrupo);
    return res.status(200).json(membros);
  } catch (error) {
    console.error("Erro ao buscar membros:", error);
    return res.status(400).json({ message: error.message });
  }
};
