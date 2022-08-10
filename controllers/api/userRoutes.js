/* const express = require('express');
const router = express.Router();
// for user Auth:
const bcrypt = require("bcrypt");
// change to an object and add {Recipes} when adding recipes
const User = require('../../models');

// to get all users, and includes their recipes
// url: ${PORT}/api/users
router.get("/",async (req,res)=>{
    // log msg to check if route works
    //ak- adding try catch block
    try{
        console.log("Calling all Users, we're sharing recipes!")
        const userData = await User.findAll({
        });

        res.status(200).json(userData);
    } catch(err){
      res.status(400).json(err);
    };
   
  });

 
  //  User.findAll().then(data=>{
    //    res.json(data)
    //}).catch(err=>{
    //    res.status(500).json({msg:"nope",err})
    //}) 
    // finding all the users
    // User.findAll({
    //     // until we add the recipe data
    //     include:[Recipe]
    // }).then(data=>{
    //     res.json(data)
    // }).catch(err=>{
    //     res.status(500).json({msg:"ERROR",err})
    // })
//})

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
    console.log("Welcome Back User! Missed you <3")

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
        req.session.user={
            id:foundUser.id,
            username:foundUser.username,
            email:foundUser.email
        }
        return res.status(200).json(foundUser)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR", err})
    })
})

module.exports = router;


*/
//ak- User Routes

const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      
    });

    res.status(200).json(userData);
  } catch(err){
    res.status(400).json(err);
  };
 
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
