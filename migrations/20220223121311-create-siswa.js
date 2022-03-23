'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('siswa', {
      idsiswa: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10),
      },
      nis: {
        type: Sequelize.STRING(10)
      },
      namasiswa: {
        type: Sequelize.STRING(40)
      },
      kelas: {
        type: Sequelize.INTEGER(50),
        allowNull: false,
        references : {
          model: "kelas",
          key: "kelas"
        }
      },
      tahunajaran: {
        type: Sequelize.STRING(10)
      },
      biaya: {
        type: Sequelize.INTEGER(20)
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
    await queryInterface.dropTable('siswa');
  }
};