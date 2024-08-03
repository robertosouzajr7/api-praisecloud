import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Membro from "../models/Member.js";
import Group from "../models/GroupModel.js";
//Cadastrar um novo membro
export const createMembro = async (data) => {
  const { senha } = data;
  const salt = await bcrypt.genSalt(10);
  const hashSenha = await bcrypt.hash(senha, salt);
  const newuser = {
    ...data,
    senha: hashSenha,
  };
  const newMembro = await Membro.create(newuser);

  // Adicionar ao grupo
  const grupo = await Group.findByPk(data.grupo);
  if (!grupo) {
    throw new Error("Grupo não encontrado!");
  }
  grupo.membros.push(newMembro.id);
  await grupo.save();

  const user = await Membro.findByPk(newMembro.id, {
    attributes: { exclude: ["senha"] },
  });
  return user;
};

//Login de Membro
export const loginMembro = async (email, senha) => {
  const user = await Membro.findOne({ where: { email } });
  if (!user) {
    throw new Error("Usuário não encontrado!");
  }

  const isValidPassword = await bcrypt.compare(senha, user.senha);
  if (!isValidPassword) {
    throw new Error("Senha inválida!");
  }

  const token = jwt.sign(
    { id: user.id, isAdmin: false },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  return token;
};

//Pegar todos os dados do membro pelo Id
export const getMembroById = async (id) => {
  const user = await Membro.findByPk(id, {
    attributes: { exclude: ["senha"] },
  });
  return user;
};

//Pegar todos os Membros cadastrados no grupo
export const getAllMembrosByGroupID = async (idGrupo) => {
  const grupo = await Group.findByPk(idGrupo, {
    include: {
      model: Member,
      as: "membros",
      attributes: { exclude: ["senha"] },
    },
  });
  if (!grupo) {
    throw new Error("Grupo não encontrado");
  }
  return grupo.membros; // Retorna os membros populados
};

//Atualizar os dados de um membro
export const updateMembro = async (idMembro, data) => {
  await Membro.update(data, { where: { id: idMembro } });
  const user = await Membro.findByPk(idMembro);
  return user;
};

//Deletar um membro
export const deleteMembro = async (idMembro) => {
  const membro = await Membro.destroy({ where: { id: idMembro } });
  if (!membro) {
    throw new Error("Membro não encontrado");
  }

  // Remover membro do grupo
  const grupo = await Group.findByPk(membro.grupo);
  if (grupo) {
    grupo.membros.pull(membro.id);
    await grupo.save();
  }

  return membro;
};
