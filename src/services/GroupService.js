import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Grupo from "../models/GroupModel.js"; // Certifique-se de usar a importação correta

export const createGroup = async (data) => {
  const { senha } = data;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(senha, salt);

  const user = {
    ...data,
    senha: hashPassword,
  };
  const novoGrupo = new Grupo({
    ...user,
  });
  await novoGrupo.save();
  const grupoSaved = await Grupo.findById(novoGrupo._id).select("-senha");
  return grupoSaved;
};

// Service para Login do Admin do Grupo

export const loginAdmin = async (email, senha) => {
  // Procure o usuário pelo email
  const findUser = await Grupo.findOne({ email });
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
  const grupo = await Grupo.findById(id);

  if (!grupo) {
    throw new Error("Grupo não encontrado");
  }

  return grupo;
};

export const updateGrupo = async (id, data) => {
  console.log(id, data);
  const grupo = await Grupo.findByIdAndUpdate(id, data, { new: true });
  return grupo;
};

export const deleteGrupo = async (id) => {
  await Grupo.findByIdAndDelete(id);
  return null;
};

export const getAllGroups = async () => {
  const grupos = await Grupo.find().select("-senha");
  return grupos;
};
