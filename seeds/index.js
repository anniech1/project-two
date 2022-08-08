
const sequelize = require("../config/connection");

const User = require("../models");

const users = [
    {
        username: "DashEats",
        email: "dash@dog.com",
        password: "gottapee"
    },
    {
        username: "PepperPotts",
        email: "pepper@cat.com",
        password: "gottapee"
    }
]

// leave until Recipe data/routes avail
// const recipes = [
//     {
//         UserId: 1,
//         content: "yum!  I love dinner!",
//     }
// ]

const seedMe = async ()=>{
    await sequelize.sync({force:true});
    await User.bulkCreate(users, {individualHooks:true})
    // leave until rrecipes are avail
    // await Recipe.bulkCreate(recipes);
    process.exit(0)
}

seedMe()

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

