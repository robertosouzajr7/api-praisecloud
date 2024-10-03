import prisma from "../../prisma/prismaClient.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Cadastrar um novo grupo
export const createGroup = async (data) => {
  const { senha, membros, ...rest } = data;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(senha, salt);
  console.log(rest);
  const novoGrupo = await prisma.group.create({
    data: {
      ...rest,
      senha: hashPassword,
      ...(membros &&
        membros.length > 0 && {
          membros: {
            create: membros.map(async (membro) => {
              nome: membro.nome;
              email: membro.email;
              telefone: membro.telefone;
              senha: await bcrypt.hash(membro.senha, 10);
              nascimento: membro.nascimento;
              nipe: membro.nipe;
              cargo: membro.cargo;
              isAdmin: membro.isAdmin || false;
            }),
          },
        }),
    },
  });

  return novoGrupo;
};

// Login do Admin do Grupo
export const loginAdmin = async (email, senha) => {
  const findUser = await prisma.group.findUnique({
    where: { email },
  });

  if (!findUser) {
    throw new Error("Usuário ou senha não encontrado");
  }

  const isValidPassword = await bcrypt.compare(senha, findUser.senha);
  if (!isValidPassword) {
    throw new Error("Usuário ou senha não encontrado");
  }

  if (!findUser.isAdmin) {
    throw new Error("Acesso negado: usuário não é administrador");
  }

  const token = jwt.sign(
    { id: findUser.id, isAdmin: findUser.isAdmin },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return token;
};

// Buscar grupo por ID
export const getGroupByID = async (id) => {
  const grupo = await prisma.group.findUnique({
    where: { id },
  });

  if (!grupo) {
    throw new Error("Grupo não encontrado");
  }

  return grupo;
};

// Atualizar grupo
export const updateGrupo = async (id, data) => {
  const grupo = await prisma.group.update({
    where: { id },
    data,
  });
  return grupo;
};

// Deletar grupo
export const deleteGrupo = async (id) => {
  const grupo = await prisma.group.delete({
    where: { id },
  });
  return grupo;
};

// Buscar todos os grupos
export const getAllGroups = async () => {
  const grupos = await prisma.group.findMany({
    select: {
      id: true,
      nome: true,
      email: true,
      telefone: true,
      isAdmin: true,
      ImgPerfil: true,
    },
  });
  return grupos;
};
