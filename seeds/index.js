const seedDietary = require('./dietary-seeds');
const seedRecipe = require('./recipe-seeds');
const seedRegions = require('./regions-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedDietary();
  console.log('\n----- DIETARY SEEDED -----\n');

  await seedRecipe();
  console.log('\n----- RECIPE SEEDED -----\n');

  await seedRegions();
  console.log('\n----- REGIONS SEEDED -----\n');

  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  process.exit(0);
};

seedAll();
