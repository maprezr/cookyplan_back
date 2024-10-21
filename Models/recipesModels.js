const { DataTypes } = require('sequelize');
const { sequelize } = require('../BaseDatos/ConexionPostgres');

const Recipe = sequelize.define('Recipe', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  desciption: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  portions: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  dificulty: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: false
  },
  video: {
    type: DataTypes.STRING,
    allowNull: false
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { tableName: 'recipes' });

module.exports = {
  Recipe
};