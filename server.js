var fs = require('fs');
var express = require('express');
var stylus = require('stylus');
var requirejs = require('requirejs');

var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'untitled');

var mixSchema = new mongoose.Schema({
  title: String,
  locked: Boolean,
  plays: Number
});

var Mix = db.model('Mix', mixSchema);

var mix = new Mix({
  title: "8ctober",
  locked: false
});

mix.save(function(err) {
  if(!err) {
    return console.log("Created a mix.");
  }
});

var config = {
  baseUrl: __dirname + '/public/javascripts',
  name: 'main',
  out: __dirname + '/public/main.js'
};
requirejs.optimize(config, function(buildResponse) {
  var contents = fs.readFileSync(config.out, 'utf8');
  console.log("Javascripts compiled by require.js.");
});

var app = express();

app.set('view engine', 'jade');

app.use(stylus.middleware({
  src: __dirname + '/public/stylesheets',
  dest: __dirname + '/public',
  // compress: true
}));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('hello');
});

app.get('/api/mixes', function(req, res) {
  return Mix.find(function(err, mixes) {
    return res.send(mixes);
  });
});

app.listen(8080);
