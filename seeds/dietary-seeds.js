const { Dietary } = require('../models');

const dietaryData = [
  {
    dietary_name: 'Halal',
  },
  {
    dietary_name: 'Kosher',
  },
  {
    dietary_name: 'Vegetarian',
  },
  {
    dietary_name: 'Vegan',
  },
  {
    dietary_name: 'Sugar-Free',
  },
  {
    dietary_name: 'Gluten-Free',
  },
  {
    dietary_name: 'Dairy-Free',
  },
];

const seedDietary = () => Dietary.bulkCreate(dietaryData);

module.exports = seedDietary;