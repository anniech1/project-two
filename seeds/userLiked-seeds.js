const { UserLiked } = require('../models');

const userLikedData = [
  {
    id: 1,
  },
];

const seedUserLiked = () => UserLiked.bulkCreate(userLikedData);

module.exports = seedUserLiked;