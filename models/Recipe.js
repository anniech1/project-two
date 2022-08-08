const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Recipe extends Model {}

Recipe.init(
  {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    },
    dish_name: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    ingredients: {
    type: DataTypes.TEXT,
    allowNull: false,
    },
    instructions: {
    type: DataTypes.TEXT,
    allowNull: false,
    },
    regions: { 
    type: DataTypes.STRING,
    allowNull: false,
    },
    dietary: { 
    type: DataTypes.STRING,
    allowNull: false,
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: true,
      },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Recipe',
  }
);

module.exports = Recipe;