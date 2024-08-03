"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Musicas", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
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
      },
      artista: {
        type: Sequelize.STRING,
      },
      grupoId: {
        type: Sequelize.UUID,
        references: {
          model: "Groups",
          key: "id",
        },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Musicas");
  },
};
