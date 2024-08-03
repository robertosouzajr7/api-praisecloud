import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize("praisecloud", "admin", "756213", {
  host: "localhost",
  dialect: "postgres",
  logging: false, // Desativa logs SQL, pode ser útil para debugging
});

export default sequelize;
