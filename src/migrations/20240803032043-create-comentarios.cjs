"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Comentarios", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      autorId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "Member", // Nome da tabela referenciada (não o nome da model)
          key: "id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      grupoId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "Groups", // Nome da tabela referenciada (não o nome da model)
          key: "id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      postId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "Posts", // Nome da tabela referenciada (não o nome da model)
          key: "id",
        },
        onDelete: "SET NULL",
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
    await queryInterface.dropTable("Comentarios");
  },
};
