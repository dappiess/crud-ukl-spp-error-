'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.pembayaran, {
        foreignKey: "idsiswa",
        as: "pembayaran",
      });
      this.hasMany(models.kelas, {
        foreignKey: "kelas",
        as: "kelas",
      });
    }
  }
  siswa.init(
    {
      idsiswa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nis: DataTypes.STRING,
      namasiswa: DataTypes.STRING,
      kelas: DataTypes.STRING,
      tahunajaran: DataTypes.STRING,
      biaya: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "siswa",
      tableName: "siswa"
    }
  );
  return siswa;
};