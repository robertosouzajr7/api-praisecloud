import sequelize from "../config/database";

import Group from "./GroupModel.js";
import Member from "./Member.js";
import Musica from "./MusicModel.js";
import Kit from "./KitModel.js";
import Agenda from "./AgendaModel.js";
import Post from "./PostModel.js";
import Comentario from "./ComentarioModel.js";
import Mensalidade from "./MensalidadeModel.js";
import { defineAssociations } from "./associations.js";

sequelize.addModels([
  Group,
  Member,
  Musica,
  Kit,
  Agenda,
  Post,
  Comentario,
  Mensalidade,
]);

console.log(sequelize._model);

defineAssociations();

export default sequelize;
