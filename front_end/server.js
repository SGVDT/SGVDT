const express = require('express');
express().use(express.static(__dirname + '/build'))
.get('*', function(req, res) {
  res.redirect('/#' + req.url);
}).listen(5000, () => console.log('server up on 5000'));
