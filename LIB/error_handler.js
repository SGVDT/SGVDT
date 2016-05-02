module.exports = function(err, res) {
  console.log(err);
  res.status(500).json({msg: 'There was an error with the database. Please try again.'});
};
