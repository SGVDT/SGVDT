module.exports = function(app) {
  require('./handle_error')(app);
  require('./sgvdt_resource')(app);
};
