import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Member from "./Member.js";

const Mensalidade = sequelize.define(
  "Mensalidade",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
    },
    vencimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    membroId: {
      type: DataTypes.UUID,
      references: {
        model: Member,
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

export default Mensalidade;
