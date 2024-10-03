import prisma from "../../prisma/prismaClient.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Cadastrar um novo membro
export const createMembro = async (data) => {
  const { senha, ...rest } = data;

  const existingMember = await prisma.member.findUnique({
    where: { email: data.email },
  });
  if (existingMember) {
    throw new Error("Email já está em uso");
  }

  const hashedPassword = await bcrypt.hash(senha, 10);

  const newMembro = await prisma.member.create({
    data: {
      ...rest,
      senha: hashedPassword,
    },
  });

  return newMembro;
};

// Login de Membro
export const loginMembro = async (email, senha) => {
  const user = await prisma.member.findUnique({
    where: { email },
  });
  if (!user) {
    throw new Error("Usuário não encontrado!");
  }

  const isValidPassword = await bcrypt.compare(senha, user.senha);
  if (!isValidPassword) {
    throw new Error("Usuário ou senha não encontrado!");
  }

  const token = jwt.sign(
    { id: user.id, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return token;
};

// Buscar membro por ID
export const getMembroById = async (id) => {
  const user = await prisma.member.findUnique({
    where: { id },
    include: {
      _count: true,
      comentarios: true,
      grupo: true,
      mensalidades: true,
      posts: true,
    },
  });
  return user;
};

// Buscar todos os membros por grupo
export const getAllMembrosByGroupID = async (idGrupo) => {
  const membros = await prisma.member.findMany({
    where: { grupoId: idGrupo },
    include: { grupo: true },
  });
  return membros;
};

// Atualizar membro
export const updateMembro = async (idMembro, data) => {
  const user = await prisma.member.update({
    where: { id: idMembro },
    data,
  });
  return user;
};

// Deletar membro
export const deleteMembro = async (idMembro) => {
  const membro = await prisma.member.delete({
    where: { id: idMembro },
  });
  return membro;
};
