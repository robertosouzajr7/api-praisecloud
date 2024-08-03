import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Group from "./GroupModel.js";

const Musica = sequelize.define(
  "Musica",
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
    musicUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capaUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    letra: {
      type: DataTypes.TEXT,
    },
    artista: {
      type: DataTypes.STRING,
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

export default Musica;
