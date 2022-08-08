/*
const sequelize = require("../config/connection");
const seedDietary = require('./dietary-seeds');
const seedRecipe = require('./recipe-seeds');
const seedRegions = require('./regions-seeds');
const seedUser = require('./user-seeds');


/*const User = require("../models");

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



//const sequelize = require('../config/connection');

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

*/

const sequelize = require('../config/connection');
const { User, Recipe, Dietary,Regions } = require('../models');

const userData = require('./userData.json');
const regionData = require('./regionData.json');
const recipeData = require('./recipeData.json');
const dietaryData = require('./dietaryData.json');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

 // await Dietary.bulkCreate(dietaryData);


  await sequelize.sync({ force: true });

  //seeding users
  const users=await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  //seeding recipe table with userid ref
  const recipes= async() => {
    for (const recipe of recipeData) {
    await Recipe.create({
      ...recipe,
      UserId: users[Math.floor(Math.random() * users.length)].id,
    });
  }
}

  //seeding region table with recipeId ref
  for (const region of regionData) {
    await Regions.create({
      ...region,
      RecipeId: recipes[Math.floor(Math.random() * recipes.length)].id,
    });
  }


  //seeding dietary table with recipeId ref
  for (const dietary of dietaryData) {
    await Dietary.create({
      ...dietary,
      RecipeId: recipes[Math.floor(Math.random() * recipes.length)].id,
    });
  }


  process.exit(0);
};

seedDatabase();
