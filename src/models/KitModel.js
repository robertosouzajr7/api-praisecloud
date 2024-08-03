import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Group from "./GroupModel.js";

const Kit = sequelize.define(
  "Kit",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nipe: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["Soprano", "Tenor", "Barítono", "Contralto", "Mezzo", "Baixo"]],
      },
    },
    cantado: {
      type: DataTypes.STRING,
    },
    kitUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    letra: {
      type: DataTypes.TEXT,
    },
    grupoId: {
      type: DataTypes.UUID,
      references: {
        model: Group,
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    timestamps: true,
  }
);

export default Kit;
