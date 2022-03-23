'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('petugas', {
      idpetugas: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(5),
      },
      nik: {
        type: Sequelize.STRING(16)
      },
      namapetugas: {
        type: Sequelize.STRING(40)
      },
      alamat: {
        type: Sequelize.STRING(25)
      },
      telp: {
        type: Sequelize.STRING(12)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('petugas');
  }
};