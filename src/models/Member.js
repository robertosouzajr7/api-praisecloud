import mongoose, { Schema } from "mongoose";

// Model para Cadastrar membros

export const memberSchema = new mongoose.Schema({
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
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },

  imgPerfil: {
    type: String,
  },

  meusKits: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Kit",
    },
  ],

  nascimento: {
    type: Date,
    required: true,
  },

  nipe: {
    type: String,
    enum: ["Soprano", "Contralto", "Mezzo", "Tenor", "Barítono", "Baixo"],
  },

  cargo: {
    type: String,
    enum: ["Direção", "Membro", "Banda", "Staff"],
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },

  mensalidades: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mensalidade",
    },
  ],

  agenda: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agenda",
    },
  ],

  grupo: {
    type: Schema.Types.ObjectId,
    ref: "Grupo",
    required: true,
  },
});
const Membro = mongoose.model("Membro", memberSchema);

export default Membro;
