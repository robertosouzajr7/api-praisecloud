import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Group from "./GroupModel.js";
import Member from "./Member.js";

const Post = sequelize.define(
  "Post",
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
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imagem: {
      type: DataTypes.STRING,
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
    autorId: {
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

/* Member.associate = () => {
  const { Group, Post, Comentario } = sequelize.models;
  Post.belongsTo(Group, { foreignKey: "grupoId", as: "grupo" });
  Post.belongsTo(Member, { foreignKey: "autorId", as: "autor" });
  Post.hasMany(Comentario, {
    foreignKey: "postId",
    as: "comentarios",
    onDelete: "CASCADE",
  });
}; */
export default Post;
