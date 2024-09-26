import path from "path";

module.exports = {
  migrationDir: path.join(__dirname, "src", "migrations"),
  modelsDir: path.join(__dirname, "src", "models"),
  sequelizeOptions: {
    config: path.join(__dirname, "src", "config", "database.js"),
    env: "development",
  },
};
