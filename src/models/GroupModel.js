import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Group = sequelize.define(
  "Groups",
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
  },
  {
    timestamps: true,
  }
);

export default Group;
