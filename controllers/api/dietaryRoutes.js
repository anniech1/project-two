const router = require('express').Router();
const { User, Recipe,Dietary,Regions } = require('../../models');
const withAuth = require('../../utils/auth');

//ak- Routes
router.get('/', async (req, res) => {
  try {
    // Get all recipes and JOIN with user data
    const dietaryData = await Dietary.findAll({
      
    });

    res.status(200).json(dietaryData);
  } catch(err){
    res.status(400).json(err);
  };
 
});


/*
//Add new dietary
router.post('/', withAuth, async (req, res) => {
  try {
    const newRegion = await Region.create({
      ...req.body,
      UserId: req.session.user_id,
    });

    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});
*/

//update region
router.put('/', withAuth, async (req, res) => {
  try {
    const newDietary = await Region.create({
      ...req.body,
      UserId: req.session.user_id,
    });

    res.status(200).json(newDietary);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const dietaryData = await Dietary.destroy({
      where: {
        id: req.params.id,
        UserId: req.session.user_id,
      },
    });

    if (!dietaryData) {
      res.status(404).json({ message: 'No recipe with this id!' });
      return;
    }

    res.status(200).json(dietaryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
