const User = require('./User');
const UserLiked = require('./UserLiked');
const Recipe = require('./Recipe');
const Regions = require('./Regions');
const Dietary = require('./Dietary');
const Comments = require('./Comments');



User.hasMany(Recipe, {
onDelete: 'CASCADE'
});

UserLiked.belongsToMany(User, {
through: Recipe,
});


Recipe.hasMany(Comments)



Recipe.hasMany(Dietary)


Recipe.hasOne(Regions)



module.exports = {
User,
UserLiked,
Recipe,
Regions,
Dietary,
Comments,
};