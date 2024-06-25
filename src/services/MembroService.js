import Membro from "../models/Member.js";
import bcrypt from "bcryptjs";
import Grupo from "../models/GroupModel.js";
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
  const newMembro = new Membro(newuser);
  await newMembro.save();

  // Adicionar ao grupo
  const grupo = await Grupo.findById(data.grupo);
  if (!grupo) {
    throw new Error("Grupo não encontrado!");
  }
  grupo.membros.push(newMembro._id);
  await grupo.save();

  const user = await Membro.findById(newMembro._id).select("-senha");
  return user;
};

//Login de Membro
export const loginMembro = async (email, senha) => {
  const user = await Membro.findOne({ email });
  if (!user) {
    throw new Error("Usuário não encontrado!");
  }

  const isValidPassword = await bcrypt.compare(senha, user.senha);
  if (!isValidPassword) {
    throw new Error("Senha inválida!");
  }

  const token = jwt.sign(
    { id: user._id, isAdmin: false },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  return token;
};

//Pegar todos os dados do membro pelo Id
export const getMembroById = async (id) => {
  const user = await Membro.findById(id).select("-senha");
  return user;
};

//Pegar todos os Membros cadastrados no grupo
export const getAllMembrosByGroupID = async (idGrupo) => {
  const grupo = await Grupo.findById(idGrupo).populate({
    path: "membros",
    model: "Membro",
    select: "-senha",
  });
  if (!grupo) {
    throw new Error("Grupo não encontrado");
  }
  return grupo.membros; // Retorna os membros populados
};

//Atualizar os dados de um membro
export const updateMembro = async (idMembro, data) => {
  const user = await Membro.findByIdAndUpdate(idMembro, data, { new: true });
  return user;
};

//Deletar um membro
export const deleteMembro = async (idMembro) => {
  const membro = await Membro.findByIdAndDelete(idMembro);
  if (!membro) {
    throw new Error("Membro não encontrado");
  }

  // Remover membro do grupo
  const grupo = await Grupo.findById(membro.grupo);
  if (grupo) {
    grupo.membros.pull(membro._id);
    await grupo.save();
  }

  return membro;
};
