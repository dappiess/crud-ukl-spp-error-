'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    this.hasMany(models.pembayaran, {
    foreignKey: "idadmin",
    as: "pembayaran",
});
    }
  }
  admin.init(
    {
      idadmin: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      namalengkap: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "admin",
      tableName: "admin"
    }
  );
  return admin;
};