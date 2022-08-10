module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  getShortComment(comment) {
    if (comment.length < 64) {
        return comment;
    }

    return comment.substring(0, 61) + '...';
}
};
