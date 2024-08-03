import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Group from "./GroupModel.js";
import Member from "./Member.js";
import Post from "./PostModel.js";

const Comentario = sequelize.define(
  "Comentario",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    autorId: {
      type: DataTypes.UUID,
      references: {
        model: Member,
        key: "id",
      },
    },
    grupoId: {
      type: DataTypes.UUID,
      references: {
        model: Group,
        key: "id",
      },
    },
    postId: {
      type: DataTypes.UUID,
      references: {
        model: Post,
        key: "id",
      },
    },
  },
  {
    timestamps: true,
  }
);

export default Comentario;
