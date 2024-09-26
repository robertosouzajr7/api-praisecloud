"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Kits", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nipe: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [
            ["Soprano", "Tenor", "Barítono", "Contralto", "Mezzo", "Baixo"],
          ],
        },
      },
      cantado: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      kitUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      letra: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      grupoId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "Groups", // Nome da tabela referenciada
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Kits");
  },
};
