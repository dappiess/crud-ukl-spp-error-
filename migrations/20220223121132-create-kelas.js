'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("kelas", {
      kelas: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(50),
      },
      idpetugas: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
        references: {
          model: "petugas",
          key: "idpetugas",
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('kelas');
  }
};