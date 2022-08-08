const router = require('express').Router();
const { User, Recipe,Dietary,Regions } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all recipes and JOIN with user data
    const regionsData = await Regions.findAll({
      
    });

    res.status(200).json(regionsData);
  } catch(err){
    res.status(400).json(err);
  };
 
});


/*
//Add new region
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
    const newRegion = await Region.create({
      ...req.body,
      UserId: req.session.user_id,
    });

    res.status(200).json(newRegion);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const regionsData = await Regions.destroy({
      where: {
        id: req.params.id,
        UserId: req.session.user_id,
      },
    });

    if (!regionsData) {
      res.status(404).json({ message: 'No recipe with this id!' });
      return;
    }

    res.status(200).json(regionsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
