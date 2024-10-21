const { DataTypes } = require('sequelize');
const { sequelize } = require('../BaseDatos/ConexionPostgres');

const User = sequelize.define('Users', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pasword: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, { tableName: 'users' });

  module.exports = {
    User
  };