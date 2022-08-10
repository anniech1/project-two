const router = require('express').Router();
const { User, Recipe } = require('../../models');
const withAuth = require('../../utils/auth');

const cloudinary = require("cloudinary").v2;

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");




const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    // async code using `req` and `file`
    // ...
    return {
      folder: 'sarapp_img',
      format: 'jpeg',
      public_id: 'recipe_img',
    };
  },
});


const upload = multer({ storage: storage });

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
/*
router.post('/img', upload.single("picture"), async (req, res) => {
  return res.json({ picture: req.file.path });
});*/

router.post('/', withAuth,upload.single("img_url"), async (req, res) => {
  try {
    const newRecipe = await Recipe.create({
      ...req.body,
     // 'img_url':req.file.path, 
      UserId: req.session.user_id,
    });

    res.status(200).json(newRecipe);
  } catch (err) {
    console.log(err);
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
