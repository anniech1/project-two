const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class UserLiked extends Model {}

UserLiked.init(
  {
    id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      references: {
        model: "User",
        key: 'id'
      },
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Recipe',
        key: 'id'
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'UserLiked',
  }
);

module.exports = UserLiked;