import {
  createMensalidade,
  deleteMensalidade,
  getAllMensalidadesByGroup,
  getMensalidadeById,
  updateMensalidade,
} from "../services/MensalidadeService.js";

//Controller de Criar mensalidade

export const createMensalidadeController = async (req, res) => {
  const mensalidade = await createMensalidade(req.body);
  res.status(201).json(mensalidade);
};

//Controller de Buscar mensalidade por ID

export const getMensalidadeByIDController = async (req, res) => {
  const mensalidade = await getMensalidadeById(req.params.id);
  res.status(200).json(mensalidade);
};

//Controller de Atualizar mensalidade

export const updateMensalidadeController = async (req, res) => {
  const mensalidade = await updateMensalidade(req.params.id, req.body);
  res.status(200).json(mensalidade);
};

//Controller de Deletar mensalidade

export const deleteMensalidadeController = async (req, res) => {
  const mensalidade = await deleteMensalidade(req.params.id);
  res.status(200).json(mensalidade);
};

//Controller de Buscar mensalidade por grupo

export const getMensalidadeByGrupoController = async (req, res) => {
  const mensalidade = await getAllMensalidadesByGroup(req.params.id);
  res.status(200).json(mensalidade);
};

//Controller de Buscar mensalidade por membro

export const getMensalidadeByMembroController = async (req, res) => {
  const mensalidade = await getMensalidadeByMembro(req.params.id);
  res.status(200).json(mensalidade);
};
