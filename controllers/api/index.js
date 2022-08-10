const express = require('express');
const router = express.Router();
const userRoutes = require("./userRoutes")
const recipeRoutes = require("./recipeRoutes")
const regionsRoutes = require("./regionsRoutes")
const dietaryRoutes = require("./dietaryRoutes")


router.use("/users",userRoutes)
router.use("/recipes",recipeRoutes)
router.use("/regions",regionsRoutes)
router.use("/dietary",dietaryRoutes)

module.exports = router;