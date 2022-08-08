const express = require('express');
const router = express.Router();
const userRoutes = require("./userRoutes")
// placeholding for recipe routes
// const recipeRoutes = require("./recipeRoutes")

router.use("/users",userRoutes)
// router.use("/recipes",recipeRoutes)

module.exports = router;