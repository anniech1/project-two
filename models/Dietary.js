const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Dietary extends Model {}

Dietary.init(
  {
    id: { //pk
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    },
    halal: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    },
    kosher: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    },
    vegetarian: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    },
    vegan: { 
    type: DataTypes.BOOLEAN,
    allowNull: false,
    },
    sugar_free: { 
    type: DataTypes.BOOLEAN,
    allowNull: false,
    },
    gluten_free: { 
    type: DataTypes.BOOLEAN,
    allowNull: false,
    },
    dairy_free: { 
    type: DataTypes.BOOLEAN,
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