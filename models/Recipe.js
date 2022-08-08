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
    // references: {
    //   model: 'Regions',
    //   key: 'id'
    // },
    },
    dietary: { 
    type: DataTypes.STRING,
    allowNull: false,
    // references: {
    //   model: 'Dietary',
    //   key: 'id'
    // },
    // },
    // user_id: { 
    // type: DataTypes.INTEGER,
    // allowNull: false,
    // references: {
    //   model: 'User',
    //   key: 'id'
    // },
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