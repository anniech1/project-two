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
    halal: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    },
    kosher: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    },
    vegetarian: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    },
    vegan: { 
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    },
    sugar_free: { 
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    },
    gluten_free: { 
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    },
    dairy_free: { 
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
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