'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pembayaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    this.belongsTo(models.siswa, {
    foreignKey: "idsiswa",
    as: "siswa",
});
    this.belongsTo(models.admin, {
    foreignKey: "idadmin",
    as: "admin",
});
    }
  }
  pembayaran.init(
    {
      idspp: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idsiswa: DataTypes.INTEGER,
      jatuhtempo: DataTypes.DATE,
      bulan: DataTypes.STRING,
      nobayar: DataTypes.STRING,
      tglbayar: DataTypes.DATE,
      jumlah: DataTypes.INTEGER,
      ket: DataTypes.STRING,
      idadmin: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "pembayaran",
      tableName: "pembayaran"
    }
  );
  return pembayaran;
};