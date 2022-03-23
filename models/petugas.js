'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class petugas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.kelas, {
        foreignKey: "idpetugas",
        as: "kelas",
      });
    }
  }
  petugas.init(
    {
      idpetugas: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nik: DataTypes.STRING,
      namapetugas: DataTypes.STRING,
      alamat: DataTypes.STRING,
      telp: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "petugas",
      tableName: "petugas"
    }
  );
  return petugas;
};