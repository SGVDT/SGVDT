const dailyData = require(__dirname + '/dailyUpdate');

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
