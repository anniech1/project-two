const router = require('express').Router();
const { User, Recipe } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all recipes and JOIN with user data
    const recipeData = await Recipe.findAll({
      
    });

    res.status(200).json(recipeData);
  } catch(err){
    res.status(400).json(err);
  };
 
});



router.post('/', withAuth, async (req, res) => {
  try {
    const newRecipe = await Recipe.create({
      ...req.body,
      UserId: req.session.user_id,
    });

    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/', withAuth, async (req, res) => {
  try {
    const newRecipe = await Recipe.create({
      ...req.body,
      UserId: req.session.user_id,
    });

    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.destroy({
      where: {
        id: req.params.id,
        UserId: req.session.user_id,
      },
    });

    if (!recipeData) {
      res.status(404).json({ message: 'No recipe with this id!' });
      return;
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
