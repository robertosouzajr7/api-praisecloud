import Group from "./GroupModel.js";
import Member from "./Member.js";
import Musica from "./MusicModel.js";
import Kit from "./KitModel.js";
import Agenda from "./AgendaModel.js";
import Post from "./PostModel.js";
import Comentario from "./ComentarioModel.js";
import Mensalidade from "./MensalidadeModel.js";

// Relacionamentos entre os modelos

// Relacionamentos de Grupo
Group.hasMany(Member, {
  foreignKey: "grupoId",
  as: "membros",
  onDelete: "CASCADE",
});
Group.hasMany(Musica, {
  foreignKey: "grupoId",
  as: "musicas",
  onDelete: "CASCADE",
});
Group.hasMany(Kit, { foreignKey: "grupoId", as: "kits", onDelete: "CASCADE" });
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
Member.belongsTo(Group, { foreignKey: "grupoId", as: "grupo" });
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

// Kits e Música
Kit.belongsTo(Group, { foreignKey: "grupoId", as: "grupo" });
Musica.belongsTo(Group, { foreignKey: "grupoId", as: "grupo" });
