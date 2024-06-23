import mongoose, { Schema } from "mongoose";

// Model para Criar Grupo

const GrupoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
  },
  senha: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },

  membros: [
    {
      type: Schema.Types.ObjectId,
      ref: "Membro",
    },
  ],

  musicas: [
    {
      type: Schema.Types.ObjectId,
      ref: "Musica",
    },
  ],
  kits: [
    {
      type: Schema.Types.ObjectId,
      ref: "Kit",
    },
  ],

  ImgPerfil: {
    type: String,
  },

  Agenda: [
    {
      type: Schema.Types.ObjectId,
      ref: "Agenda",
    },
  ],

  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Posts",
    },
  ],
});

const grupo = mongoose.model("Grupo", GrupoSchema);

export default grupo;
