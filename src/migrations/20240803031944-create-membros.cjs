"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Member", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imgPerfil: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      nascimento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      nipe: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [
            ["Soprano", "Contralto", "Mezzo", "Tenor", "Barítono", "Baixo"],
          ],
        },
      },
      cargo: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [["Direção", "Membro", "Banda", "Staff"]],
        },
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      grupoId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Groups", // Nome da tabela associada (não o nome da model)
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
    await queryInterface.dropTable("Member");
  },
};
