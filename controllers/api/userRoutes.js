const express = require('express');
const router = express.Router();
// for user Auth:
const bcrypt = require("bcrypt");
const User = require('../../models');

// to get all users, and includes their recipes
// url: ${PORT}/api/users
router.get("/",(req,res)=>{
    // log msg to check if route works
    console.log("Calling all Users, we're sharing recipes!")
    User.findAll().then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"nope",err})
    })
    // finding all the users
    // User.findAll({
    //     // until we add the recipe data
    //     include:[Recipe]
    // }).then(data=>{
    //     res.json(data)
    // }).catch(err=>{
    //     res.status(500).json({msg:"ERROR",err})
    // })
})

// creating/adding a user
// url: ${PORT}/api/users
router.post("/",(req,res)=>{
    // log msg to check if route works:
    console.log("Welcome new user! Hope you're hungry!")

    User.create({
        // must check that this matches the format of USER MODEL
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

// NOW we're logging someone in:
// url: ${PORT}/api/users/login
router.post("/login",(req,res)=>{
    // log msg to check if route works
    console.log("Welcome Back User! Missed you <3");

    User.findOne({
        where:{
            email:req.body.email
        }
    }).then(foundUser=>{
        // checking if there is a user by that email
        if(!foundUser){
                return res.status(401).json({msg:"who goes there?? (Invalid login credentials)"})
        }
        if(!bcrypt.compareSync(req.body.password,foundUser.password)){
            return res.status(401).json({msg:"who goes there?? (Invalid login credentials)"})
        }
        return res.status(200).json(foundUser)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR", err})
    })
})

module.exports = router;


