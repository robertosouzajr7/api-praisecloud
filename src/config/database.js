import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false, // Desativa logs SQL, pode ser útil para debugging
  }
);

export default sequelize;

/* 
import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

export default {
  development: {
    username: process.env.DB_USERNAME, // Nome do usuário do banco de dados
    password: process.env.DB_PASSWORD, // Senha do banco de dados
    database: process.env.DB_NAME, // Nome do banco de dados
    host: process.env.DB_HOST, // Host do banco de dados
    dialect: "postgres", // Dialeto do banco de dados (mysql, postgres, etc.)
  },
  test: {
    username: process.env.DB_USERNAME, // Nome do usuário do banco de dados
    password: process.env.DB_PASSWORD, // Senha do banco de dados
    database: process.env.DB_NAME, // Nome do banco de dados
    host: process.env.DB_HOST, // Host do banco de dados
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USERNAME, // Nome do usuário do banco de dados
    password: process.env.DB_PASSWORD, // Senha do banco de dados
    database: process.env.DB_NAME, // Nome do banco de dados
    host: process.env.DB_HOST, // Host do banco de dados
    dialect: "postgres",
  },
};
 */
