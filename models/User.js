const { Model, DataTypes } = require('sequelize');
<<<<<<< HEAD
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
    },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
    },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipeLibrary: {
      type: DataTypes.BOOLEAN,
      default: true,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
  }
);

module.exports = User;

    // is this the same as the other beforeCreate?? Will test after merging -KG
    // hooks:{
    //     beforeCreate:userObj=>{
    //         userObj.password = bcrypt.hashSync(userObj.password,4);
    //         return userObj;
    //     }
    // }