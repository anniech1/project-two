const seedComments = require('./comments-seeds');
const seedDietary = require('./dietary-seeds');
const seedRecipe = require('./recipe-seeds');
const seedRegions = require('./regions-seeds');
const seedUser = require('./user-seeds');
const seedUserLiked = require('./userLiked-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  // await seedComments();
  // console.log('\n----- COMMENTS SEEDED -----\n');

  // await seedDietary();
  // console.log('\n----- DIETARY SEEDED -----\n');

  // await seedRecipe();
  // console.log('\n----- RECIPE SEEDED -----\n');

  await seedRegions();
  console.log('\n----- REGIONS SEEDED -----\n');

  // await seedUser();
  // console.log('\n----- USER SEEDED -----\n');

  // await seedUserLiked();
  // console.log('\n----- USERLIKED SEEDED -----\n');

  process.exit(0);
};

seedAll();