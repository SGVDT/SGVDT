const dailyData = require(__dirname + '/daily_update');

module.exports = exports = function() {
  dailyData( () => {
    process.stdout.write('database initialized');
  });
  setInterval(() => {
    dailyData( () => {
      process.stdout.write('dailyData running from interval start');
    });
  }, 86400000);
};
