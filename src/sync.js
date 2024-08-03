import sequelize from "../src/config/database.js"; // Assumindo que você tem um arquivo de configuração do Sequelize
import "./models/AgendaModel.js"; // Certifique-se de que isso importe todos os seus modelos
import "./models/ComentarioModel.js";
import "./models/GroupModel.js";
import "./models/KitModel.js";
import "./models/Member.js";
import "./models/PostModel.js";
import "./models/MensalidadeModel.js";
import "./models/MusicModel.js";
import "./models/associations.js";

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // 'force: true' recria todas as tabelas
    console.log("Database synced successfully.");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};

syncDatabase();
