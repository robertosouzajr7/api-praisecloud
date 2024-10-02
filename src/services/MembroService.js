import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Group from "../models/GroupModel.js";
import Member from "../models/Member.js";
//Cadastrar um novo membro
export const createMembro = async (data) => {
  try {
    const {
      nome,
      email,
      telefone,
      senha,
      nascimento,
      nipe,
      cargo,
      isAdmin,
      grupoId,
    } = data;

    // Verificar se o email já existe
    const existingMember = await Member.findOne({ where: { email } });
    if (existingMember) {
      throw new Error("Email já está em uso");
    }

    // Hash da senha
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(senha, salt);

    // Criar novo membro
    const newMembro = await Member.create({
      nome,
      email,
      telefone,
      senha: hashedPassword,
      nascimento,
      nipe,
      cargo,
      isAdmin,
      grupoId,
    });

    return newMembro;
  } catch (error) {
    throw new Error(`Erro ao criar membro: ${error.message}`);
  }
};

//Login de Membro
export const loginMembro = async (email, senha) => {
  const user = await Member.findOne({ where: { email } });
  if (!user) {
    throw new Error("Usuário não encontrado!");
  }

  const isValidPassword = await bcrypt.compare(senha, user.senha);
  if (!isValidPassword) {
    throw new Error("Usuário ou senha não encontrado!");
  }

  if (!user.isAdmin) {
    const token = jwt.sign(
      { id: user.id, isAdmin: false },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    return token;
  }

  const token = jwt.sign(
    { id: user.id, isAdmin: true },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  return token;
};

//Pegar todos os dados do membro pelo Id
export const getMembroById = async (id) => {
  const user = await Member.findByPk(id, {
    attributes: { exclude: ["senha"] },
  });
  return user;
};

//Pegar todos os Membros cadastrados no grupo
export const getAllMembrosByGroupID = async (idGrupo) => {
  try {
    console.log(idGrupo);

    const grupo = await Group.findOne({
      where: { id: idGrupo },
      include: {
        model: Member, // Inclua o modelo associado
        as: "membros", // O alias usado no `hasMany`
      },
    });

    console.log("grupo encontrado", grupo);

    if (!grupo) {
      throw new Error("Grupo não encontrado");
    }

    return grupo;
  } catch (error) {
    console.error("Erro ao buscar membros do grupo:", error);
    throw error;
  }
};

//Atualizar os dados de um membro
export const updateMembro = async (idMembro, data) => {
  await Member.update(data, { where: { id: idMembro } });
  const user = await Member.findByPk(idMembro);
  return user;
};

//Deletar um membro
export const deleteMembro = async (idMembro) => {
  const membro = await Member.destroy({ where: { id: idMembro } });
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
