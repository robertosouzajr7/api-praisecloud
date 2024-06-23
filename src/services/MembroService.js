import membro from "../models/Member.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Cadastrar um novo membro
export const createMembro = async (data) => {
  const { senha } = data;
  const salt = await bcrypt.genSalt(10);
  const hashSenha = await bcrypt.hash(senha, salt);
  const newuser = {
    ...data,
    senha: hashSenha,
  };
  const newMembro = new membro(newuser);
  await newMembro.save();
  const user = await membro.findOne(email, "-senha");
  return user;
};

//Login de Membro

export const loginMembro = async (email, senha) => {
  const membro = await membro.findOne({ email });
  if (!membro) {
    throw new Error("Usuário não encontrado!");
  }

  const isValidPassword = await bcrypt.compare(senha, membro.senha);
  if (!isValidPassword) {
    throw new Error("Senha inválida!");
  }

  const token = jwt.sign(
    { id: membro._id, isAdmin: false },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  return token;
};

//Pegar todos os dados do membro pelo Id
export const getMembroById = async (id) => {
  const membro = await membro.findById(id);
  return membro;
};

//Pegar todos os Membros cadastrados no grupo
export const getAllMembrosByGroupID = async (idGrupo) => {
  const membros = await membro.find({ grupo: idGrupo });
  return membros;
};

//Atualizar os dados de um membro
export const updateMembro = async (idMembro, data) => {
  const membro = await membro.findByIdAndUpdate(idMembro, data);
  return membro;
};

//Deletar um membro
export const deleteMembro = async (idMembro) => {
  const membro = await membro.findByIdAndDelete(idMembro);
  return membro;
};
