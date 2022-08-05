const { Comments } = require('../models');

const commentsData = [
  {
    id: 1,
  },
  {
    user_comment: 'This recipe is amazing!'
  },
];

const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments;