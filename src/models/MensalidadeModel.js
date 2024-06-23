import mongoose from "mongoose";

//Model para cadastrar musica
const mensalidadeModel = mongoose.Schema({
  Valor: {
    type: Number,
    required: true,
  },

  descricao: {
    type: String,
  },
  vencimento: {
    type: Date,
    required: true,
  },
  membros: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Membro",
    },
  ],
  createAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});

const Mensalidade = mongoose.model("Mensalidade", mensalidadeModel);

export default Mensalidade;
