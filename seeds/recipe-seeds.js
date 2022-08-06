const { Recipe } = require('../models');

const recipeData = [
  {
    id: 1,
    dish_name: 'Mawalah',
    ingredients: 'eggs, flour, water, sugar, and salt.',
    instructions: 'to be announced',
    regions: 'East Africa',
    dietary: 1,
    user_id: 1,
  },
];

const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipe;