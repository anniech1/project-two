const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Dietary extends Model {}

Dietary.init(
  {
    id: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    },
    dietary_name: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Dietary',
  }
);

module.exports = Dietary;