import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Group = sequelize.define(
  "Group",
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
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    ImgPerfil: {
      type: DataTypes.STRING,
    },
    membros: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      defaultValue: [],
    },
  },
  {
    timestamps: true,
  }
);

export default Group;
