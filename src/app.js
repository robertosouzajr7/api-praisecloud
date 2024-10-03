import express from "express";
import dotenv from "dotenv";
import cors from "cors";

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
app.use("/kits", kitRouter);
app.use("/mensalidade", mensalidadesRouter);
app.use("/comentario", commentarioRouter);
app.use("/post", postRouter);
app.use("/musica", musicasRouter);
app.use("/agenda", agendaRouter);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na Porta ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
