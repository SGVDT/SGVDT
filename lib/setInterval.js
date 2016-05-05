const dailyData = require(__dirname + '/dailyUpdate');

module.exports = exports = setInterval(() => {
  dailyData( () => {
    process.stdout.write('dailyData running from interval start');
  });
}, 8.64e+7);
