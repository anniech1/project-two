const User = require('./User');
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