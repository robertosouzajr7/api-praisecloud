import express from "express";
import {
  createGroup,
  loginAdmin,
  deleteGrupo,
  getGroupByID,
  updateGrupo,
  getAllGroups,
} from "../services/GroupService.js";

//Controller para Cadastrar um novo grupo

export const createGrupoController = async (req, res) => {
  try {
    const grupo = req.body;
    const novoGrupo = await createGroup(grupo);
    res.status(201).json(novoGrupo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller para Login Admin Grupo

export const loginGrupoController = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const token = await loginAdmin(email, senha);
    res.status(201).json(token);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Controller para deletar um grupo

export const deleteGrupoController = async (req, res) => {
  try {
    const { id } = req.params;
    const grupo = await deleteGrupo(id);
    res.status(200).json(grupo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Controller para atualizar um grupo

export const updateGrupoController = async (req, res) => {
  try {
    const { id } = req.params;
    const grupo = await updateGrupo(id, req.body);
    res.status(200).json(grupo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Controller para pegar um grupo pelo Id

export const getGrupoByIDController = async (req, res) => {
  try {
    const { id } = req.params;
    const grupo = await getGroupByID(id);
    res.status(200).json(grupo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Controller para pegar todos os grupos

export const getAllGruposController = async (req, res) => {
  try {
    const grupos = await getAllGroups();
    res.status(200).json(grupos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
