// Relacionamentos entre os modelos
import sequelize from "../config/database.js";

// Definindo os relacionamentos entre os modelos após a inicialização
export const defineAssociations = () => {
  const { Group, Member, Musica, Kit, Agenda, Post, Comentario, Mensalidade } =
    sequelize.models;

  // Relacionamentos de Grupo
  Group.hasMany(Member, {
    foreignKey: "grupoId",
    as: "membersList",
    onDelete: "CASCADE",
  });
  Group.hasMany(Musica, {
    foreignKey: "grupoId",
    as: "musicas",
    onDelete: "CASCADE",
  });
  Group.hasMany(Kit, {
    foreignKey: "grupoId",
    as: "kits",
    onDelete: "CASCADE",
  });
  Group.hasMany(Agenda, {
    foreignKey: "grupoId",
    as: "agendas",
    onDelete: "CASCADE",
  });
  Group.hasMany(Post, {
    foreignKey: "grupoId",
    as: "posts",
    onDelete: "CASCADE",
  });
  Group.hasMany(Comentario, {
    foreignKey: "grupoId",
    as: "comentarios",
    onDelete: "CASCADE",
  });

  // Relacionamentos de Membro
  Member.belongsTo(Group, {
    foreignKey: "grupoId",
    as: "grupo",
  });
  Member.hasMany(Post, {
    foreignKey: "autorId",
    as: "posts",
    onDelete: "CASCADE",
  });
  Member.hasMany(Comentario, {
    foreignKey: "autorId",
    as: "comentarios",
    onDelete: "CASCADE",
  });
  Member.hasMany(Mensalidade, {
    foreignKey: "membroId",
    as: "mensalidades",
    onDelete: "CASCADE",
  });

  // Relacionamentos de Post
  Post.belongsTo(Group, { foreignKey: "grupoId", as: "grupo" });
  Post.belongsTo(Member, { foreignKey: "autorId", as: "autor" });
  Post.hasMany(Comentario, {
    foreignKey: "postId",
    as: "comentarios",
    onDelete: "CASCADE",
  });

  // Relacionamentos de Comentario
  Comentario.belongsTo(Post, { foreignKey: "postId", as: "post" });
  Comentario.belongsTo(Member, { foreignKey: "autorId", as: "autor" });
  Comentario.belongsTo(Group, { foreignKey: "grupoId", as: "grupo" });

  // Relacionamentos de Mensalidade
  Mensalidade.belongsTo(Member, { foreignKey: "membroId", as: "membro" });

  // Relacionamentos de Kit e Música
  Kit.belongsTo(Group, { foreignKey: "grupoId", as: "grupo" });
  Musica.belongsTo(Group, { foreignKey: "grupoId", as: "grupo" });
};
