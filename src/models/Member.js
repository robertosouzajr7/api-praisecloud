import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Group from "./GroupModel.js";

const Member = sequelize.define(
  "Members",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgPerfil: {
      type: DataTypes.STRING,
    },
    nascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    nipe: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["Soprano", "Contralto", "Mezzo", "Tenor", "Barítono", "Baixo"]],
      },
    },
    cargo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["Direção", "Membro", "Banda", "Staff"]],
      },
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    grupoId: {
      type: DataTypes.UUID,
      references: {
        model: Group,
        key: "id",
      },
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    timestamps: true,
  }
);

Member.afterCreate(async (member, options) => {
  const group = await Group.findByPk(member.grupoId);
  if (group) {
    await group.update({
      membros: [...group.membros, member.id],
    });
  }
});

Member.afterDestroy(async (member, options) => {
  const group = await Group.findByPk(member.grupoId);
  if (group) {
    await group.update({
      membros: group.membros.filter((id) => id !== member.id),
    });
  }
});

export default Member;
