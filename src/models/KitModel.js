import mongoose, { Schema } from "mongoose";

//Model para cadastrar Kits de Ensaio
const KitModel = mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  nipe: {
    type: String,
    enum: ["Soprano", "Tenor", "Barítono", "Contralto", "Mezzo", "Baixo"],
    required: true,
  },

  cantado: {
    type: String,
  },

  kitUrl: {
    type: String,
    required: true,
  },

  letra: {
    type: String,
  },
  grupo: {
    type: Schema.Types.ObjectId,
    ref: "Grupo",
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

const Kit = mongoose.model("Kit", KitModel);

export default Kit;
