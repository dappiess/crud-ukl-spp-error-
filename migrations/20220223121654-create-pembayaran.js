'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pembayaran", {
      idspp: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(100),
      },
      idsiswa: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        references: {
          model: "siswa",
          key: "idsiswa",
        }
      },
      jatuhtempo: {
        type: Sequelize.DATE,
      },
      bulan: {
        type: Sequelize.STRING(20)
      },
      nobayar: {
        type: Sequelize.STRING(10)
      },
      tglbayar: {
        type: Sequelize.DATE
      },
      jumlah: {
        type: Sequelize.INTEGER(20)
      },
      ket: {
        type: Sequelize.STRING(20)
      },
      idadmin: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
        references : {
          model: "admin",
          key: "idadmin"
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
    await queryInterface.dropTable('pembayaran');
  }
};