const { Recipe } = require('../models');

const recipeData = [
  {
    id: 1
  },
  {
    dishName: 'Mawalah',
  },
  {
    ingredients: 'eggs, flour, watter, sugar, and salt.',
  },
  {
    instructions: 'to be announced',
  },
  {
    likes: 10,
  },
  {
    comments: 'Amazing!',
  },
  {
    regions: 'East Africa',
  },
  {
    dietary: '',
  },
  {
    user_id: '',
  },
  {
    instructions: '',
  },
  {
    dish_name: '',
  },
  {
    ingredients: '',
  },
  {
    instructions: '',
  },
  {
    dish_name: '',
  },
  {
    ingredients: '',
  },
  {
    instructions: '',
  },
  {
    dish_name: '',
  },
  {
    ingredients: '',
  },
  {
    instructions: '',
  },
  {
    dish_name: '',
  },
  {
    ingredients: '',
  },
  {
    instructions: '',
  },
  {
    dish_name: '',
  },
  {
    ingredients: '',
  },
  {
    instructions: '',
  },
];

const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipe;