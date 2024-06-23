import mongoose from "mongoose";

//Model para cadastrar Kits de Ensaio
const ComentarioModel = mongoose.Schema({
  descricao: {
    type: String,
    required: true,
  },

  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Membro",
  },

  grupo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Grupo",
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Comentario = mongoose.model("Comentario", ComentarioModel);

export default Comentario;
