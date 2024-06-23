import {
  createKit,
  deleteKit,
  getAllKitsByGroup,
  getKitById,
  updateKit,
} from "../services/KitsService.js";

//Controller de Criar novo kit de ensaio

export async function createKitController(req, res) {
  const data = req.body;
  const newKit = await createKit(data);
  return res.status(201).json(newKit);
}

//Controller de Deletar um kit de ensaio

export async function deleteKitController(req, res) {
  const { id } = req.params;
  const deletedKit = await deleteKit(id);
  return res.status(200).json(deletedKit);
}

//Controller de Atualizar um kit de ensaio

export async function updateKitController(req, res) {
  const { id } = req.params;
  const data = req.body;
  const updatedKit = await updateKit(id, data);
  return res.status(200).json(updatedKit);
}

//Controller de Pegar todos os kits de ensaio de um grupo

export async function getAllKitsByGroupController(req, res) {
  const { id } = req.params;
  const kits = await getAllKitsByGroup(id);
  return res.status(200).json(kits);
}

//Controller de Pegar um kit de ensaio pelo Id

export async function getKitByIdController(req, res) {
  const { id } = req.params;
  const kit = await getKitById(id);
  return res.status(200).json(kit);
}
