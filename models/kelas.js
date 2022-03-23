'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    this.hasMany(models.siswa, {
    foreignKey: "kelas",
    as: "siswa",
});
    }
  }
  kelas.init(
    {
      kelas: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      idpetugas: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "kelas",
      tableName: "kelas"
    }
  );
  return kelas;
};