"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Musicas", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      musicUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      capaUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      letra: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      artista: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      grupoId: {
        type: Sequelize.UUID,
        allowNull: false,
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
    await queryInterface.dropTable("Musicas");
  },
};
