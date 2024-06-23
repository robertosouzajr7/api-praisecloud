import mongoose from "mongoose";

//Model para cadastrar musica
const musicModel = mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },

  musicUrl: {
    type: String,
    required: true,
  },

  capaUrl: {
    type: String,
    required: true,
  },
  letra: {
    type: String,
  },
  artista: {
    type: String,
  },

  grupo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Grupo",
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

const Musica = mongoose.model("Musica", musicModel);

export default Musica;
