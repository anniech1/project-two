
const User = require("./User");
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



// {
//     User
//     // leave commented until recipes are imported
//     // ,
//     // Recipe
// }

//const User = require('./User');
const Recipe = require('./Recipe');
const Regions = require('./Regions');
const Dietary = require('./Dietary');



User.hasMany(Recipe, {
onDelete: 'CASCADE'
});

Recipe.hasMany(Dietary)


Recipe.hasOne(Regions)

module.exports = {
User,
Recipe,
Regions,
Dietary,
};

