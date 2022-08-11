const router = require('express').Router();
const { Recipe, User, Regions,Dietary } = require('../models');
const withAuth = require('../utils/auth');


// view all recipes w/ user info
router.get('/', async (req, res) => {
  try {
    // Get all recipes and JOIN with user data
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      recipes, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// view recipe by id
router.get('/recipe/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name']
        },
      ],
    });

    const recipe = recipeData.get({ plain: true });

    res.render('recipes', {
      ...recipe,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
// profile page for each logged in user
router.get('/profile', withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      where: {
        UserId: req.session.logged_in
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('profile', { 
      recipes, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

    // Find the logged in user based on the session ID
    /*const userData = await User.findByPk(req.session.user_id, {
   
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});*/


// Use withAuth middleware to prevent access to route
// add recipe page
router.get('/addrecipe', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
   
    });

    const user = userData.get({ plain: true });

    res.render('addrecipe', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// trying for postrecipe route -KG
// url: port/addrecipe
// router.get('/addrecipe', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
     
//     });

//     const user = userData.get({ plain: true });

//     res.render('addrecipe', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// route attempt for recipe page:
// YES works. now to get the template page working.
// router.get('/recipes/:id',(req,res)=>{
//   Recipe.findByPk(req.params.id,{
//     include:[User]
//   }).then(data=>{
//     const hbsData = data.toJSON()
//     console.log(hbsData)
//     res.render('recipes',hbsData)
//   })
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
