import mongoose, { Schema } from "mongoose";

//Model para cadastrar Kits de Ensaio
const PostModel = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },

  comentarios: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comentario",
    },
  ],

  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Membro",
  },

  grupo: {
    type: Schema.Types.ObjectId,
    ref: "Grupo",
  },
  imagem: {
    type: String,
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Posts = mongoose.model("Posts", PostModel);

export default Posts;
