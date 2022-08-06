const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Regions extends Model {}

Regions.init(
  {
    id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    region_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Regions',
  }
);

module.exports = Regions;