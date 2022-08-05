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
    dishName: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    ingredients: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    instructions: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    likes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
    comments: { 
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'Comments',
      key: 'id'
    },
    },
    regions: { 
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'Regions',
      key: 'id'
    },
    },
    dietary: { 
    type: DataTypes.BOOLEAN,
    allowNull: false,
    references: {
      model: 'Dietary',
      key: 'id'
    },
    },
    user_id: { 
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id'
    },
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