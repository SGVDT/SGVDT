const Router = require('express').Router;
const eH = require(__dirname + '/../lib/error_handler');
const request = require('superagent');
const EventEmitter = require('events');

var newsRouter = module.exports = exports = Router();

newsRouter.get('/news', (req, res) => {
  var trigger = new EventEmitter();
  request.get('https://gateway-a.watsonplatform.net/calls/data/GetNews?outputMode=json&return=enriched.url.url,enriched.url.title,enriched.url.publicationDate.date,enriched.url.image,enriched.url.text&start=now-29d&end=now&q.enriched.url.title=A[seattle^gun]&q.enriched.url.text=A[seattle^gun^violence]&return=enriched.url.title&apikey=a9a5ee133f49a99df63f0481f07a8c96cea293b1' +
  process.env.WATSON_API2)

  .end((err, data) => {
    if (err) return eH(err);
    trigger.emit('finished', data);
  });
  trigger.on('finished', (data) => {
    res.status(200).json(data);
  });
});
