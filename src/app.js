/* import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/database.js"; // Importar Sequelize

// Importar models para garantir que são registradas pelo Sequelize
import "./models/AgendaModel.js";
import "./models/ComentarioModel.js";
import "./models/KitModel.js";
import "./models/MensalidadeModel.js";
import "./models/PostModel.js";
import "./models/MusicModel.js";
import "./models/GroupModel.js";
import "./models/Member.js";

// Importar rotas
import grupoRouter from "./routes/GrupoRouter.js";
import membroRouter from "./routes/MembroRouter.js";
import kitRouter from "./routes/KitsRouter.js";
import mensalidadesRouter from "./routes/MensalidadesRouter.js";
import commentarioRouter from "./routes/ComentariosRouter.js";
import postRouter from "./routes/PostsRouter.js";
import musicasRouter from "./routes/MusicasRouter.js";
import agendaRouter from "./routes/AgendaRouter.js";

dotenv.config();

const app = express();
app.use(express.json());

// Configuração do CORS
const corsOptions = {
  origin: "*", // Permitir todas as origens (você pode restringir isso conforme necessário)
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type, Authorization",
};

app.use(cors(corsOptions));

// Configuração das rotas
app.use("/grupo", grupoRouter);
app.use("/membro", membroRouter);
app.use("/kit", kitRouter);
app.use("/mensalidade", mensalidadesRouter);
app.use("/comentario", commentarioRouter);
app.use("/post", postRouter);
app.use("/musica", musicasRouter);
app.use("/agenda", agendaRouter);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Sincronizar todas as models definidas com o banco de dados
    await sequelize.sync({ force: false }); // Use { force: true } para recriar as tabelas, apagando dados existentes
    console.log("Database & tables created!");

    app.listen(PORT, () => {
      console.log(`Servidor rodando na Porta ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
 */

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/database.js"; // Importar Sequelize

// Importar models para garantir que são registradas pelo Sequelize
import "./models/AgendaModel.js";
import "./models/ComentarioModel.js";
import "./models/KitModel.js";
import "./models/MensalidadeModel.js";
import "./models/PostModel.js";
import "./models/MusicModel.js";
import "./models/GroupModel.js";
import "./models/Member.js";

import grupoRouter from "./routes/GrupoRouter.js";
import membroRouter from "./routes/MembroRouter.js";
import kitRouter from "./routes/KitsRouter.js";
import mensalidadesRouter from "./routes/MensalidadesRouter.js";
import commentarioRouter from "./routes/ComentariosRouter.js";
import postRouter from "./routes/PostsRouter.js";
import musicasRouter from "./routes/MusicasRouter.js";
import agendaRouter from "./routes/AgendaRouter.js";

dotenv.config();

const app = express();
app.use(express.json());

// Configuração do CORS
const corsOptions = {
  origin: "*", // Permitir todas as origens (você pode restringir isso conforme necessário)
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type, Authorization",
};

app.use(cors(corsOptions));

// Configuração das rotas
app.use("/grupo", grupoRouter);
app.use("/grupos", membroRouter);
app.use("/membro", membroRouter);
app.use("/kit", kitRouter);
app.use("/mensalidade", mensalidadesRouter);
app.use("/comentario", commentarioRouter);
app.use("/post", postRouter);
app.use("/musica", musicasRouter);
app.use("/agenda", agendaRouter);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Sincronizar todas as models definidas com o banco de dados
    await sequelize.sync({ force: false }); // Use { force: true } para recriar as tabelas, apagando dados existentes
    console.log("Database & tables created!");

    app.listen(PORT, () => {
      console.log(`Servidor rodando na Porta ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
