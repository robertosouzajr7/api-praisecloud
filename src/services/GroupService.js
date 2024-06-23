import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import grupo from "../models/GroupModel.js";

export const createGroup = async (data) => {
  const { senha } = data;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(senha, salt);

  const user = {
    ...data,
    senha: hashPassword,
  };
  const novoGrupo = new grupo({
    ...user,
  });
  await novoGrupo.save();
  const grupoSaved = await grupo.findById(user._id, "-senha");
  return grupoSaved;
};

// Service para Login do Admin do Grupo

export const loginAdmin = async (email, senha) => {
  // Procure o usuário pelo email
  const findUser = await grupo.findOne({ email });
  if (!findUser) {
    throw new Error("Usuário ou senha não encontrado");
  }

  // Verifique a senha
  const isValidPassword = await bcrypt.compare(senha, findUser.senha);
  if (!isValidPassword) {
    throw new Error("Usuário ou senha não encontrado");
  }

  // Verifique se o usuário é administrador
  if (!findUser.isAdmin) {
    throw new Error("Usuário não é administrador");
  }

  // Gere um token JWT com as informações do usuário
  const token = jwt.sign(
    { id: findUser._id, isAdmin: findUser.isAdmin },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return token;
};

export const getGroupByID = async (id) => {
  const grupo = await grupo.findById(id);
  return grupo;
};

export const updateGrupo = async (id, data) => {
  const grupo = await grupo.findByIdAndUpdate(id, data, { new: true });
  return grupo;
};

export const deleteGrupo = async (id) => {
  const grupo = await grupo.findByIdAndDelete(id);
  return grupo;
};

export const getAllGroups = async () => {
  const grupos = await grupo.find().select("-senha");
};
