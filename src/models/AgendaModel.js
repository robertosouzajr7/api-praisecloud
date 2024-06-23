import mongoose from "mongoose";

//Model para cadastrar Kits de Ensaio
const AgendaModel = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },

  endereco: {
    type: String,
  },

  data: {
    type: Date,
  },

  Status: {
    type: String,
    enum: ["Confirmado", "Agendado", "Finalizado", "Cancelado"],
  },

  grupo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "GrupoModel",
    required: true,
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});

const Agendas = mongoose.model("Agenda", AgendaModel);

export default Agendas;
