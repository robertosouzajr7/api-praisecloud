import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Group from "./GroupModel.js";

const Agenda = sequelize.define(
  "Agenda",
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
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endereco: {
      type: DataTypes.STRING,
    },
    data: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["Confirmado", "Agendado", "Finalizado", "Cancelado"]],
      },
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

export default Agenda;
