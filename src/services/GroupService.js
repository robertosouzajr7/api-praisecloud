import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Group from "../models/GroupModel.js";
// Certifique-se de usar a importação correta

export const createGroup = async (data) => {
  const { senha } = data;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(senha, salt);

  const novoGrupo = await Group.create({
    ...data,
    senha: hashPassword,
  });
  const grupoSaved = await Group.findByPk(novoGrupo.id, {
    attributes: { exclude: ["senha"] },
  });
  return grupoSaved;
};

// Service para Login do Admin do Grupo
export const loginAdmin = async (email, senha) => {
  try {
    // Procure o usuário pelo email
    const findUser = await Group.findOne({
      where: { email: email },
    });
    if (!findUser) {
      throw new Error("Usuário ou senha não encontrado");
    }
    console.log(`usuário encontrado! ${findUser.senha}`);
    // Verifique a senha
    const isValidPassword = await bcrypt.compare(senha, findUser.senha);
    if (!isValidPassword) {
      throw new Error("Usuário ou senha não encontrado");
    }

    // Verifique se o usuário é administrador
    if (!findUser.isAdmin) {
      throw new Error("Acesso negado: usuário não é administrador");
    }

    // Gere um token JWT com as informações do usuário
    const token = jwt.sign(
      { id: findUser.id, isAdmin: findUser.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return token;
  } catch (error) {
    console.error("Erro no login do administrador:", error);
    throw new Error("Erro ao fazer login: " + error.message);
  }
};

export const getGroupByID = async (id) => {
  const grupo = await Group.findByPk(id);

  if (!grupo) {
    throw new Error("Grupo não encontrado");
  }

  return grupo;
};

export const updateGrupo = async (id, data) => {
  await Group.update(data, { where: { id } });
  const grupo = await Group.findByPk(id);
  return grupo;
};

export const deleteGrupo = async (id) => {
  const grupo = await Group.destroy({ where: { id } });
  if (!grupo) {
    throw new Error("Grupo não encontrado");
  }
  return grupo; // Retornar o grupo deletado
};

export const getAllGroups = async () => {
  const grupos = await Group.findAll({ attributes: { exclude: ["senha"] } });
  return grupos;
};
