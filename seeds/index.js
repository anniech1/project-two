const sequelize = require("../config/connection");

const { User, Recipe } = require("../models");

const users = [
    {
        username: "DashEats",
        email: "dash@dog.com",
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