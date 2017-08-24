'use strict';
//load modules
var express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path');
  // smoothScroll = require('smoothscroll');




var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 5000;

app.use('/', express.static('public'));

// vendor scripts
app.get('/vendor/angular.js', function(req, res) {
  res.sendFile(path.join(__dirname, '../node_modules', 'angular', 'angular.js'));
});
app.get('/vendor/angular-route.js', function(req, res) {
  res.sendFile(path.join(__dirname, '../node_modules', 'angular-route', 'angular-route.js'));
});
app.get('/vendor/angular-animate.js', function(req,res){
  res.sendFile(path.join(__dirname, '../node_modules', 'angular-animate', 'angular-animate.js'));
});

app.listen(port);
console.log('Magic happens on port ' + port);
