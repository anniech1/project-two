const User = require(".User");
// leave out until recipe models are added
// const Recipe = require("./Recipe")

 // leave commented until recipes are imported
// User.hasMany(Recipe,{
//     onDelete:"CASCADE",
//     foreignKey:{
//         allowNull:false
//     }
// })
// Recipe.belongsTo(User);

module.exports={
    User
    // leave commented until recipes are imported
    // ,
    // Recipe
}
