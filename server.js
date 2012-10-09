var fs = require('fs');
var express = require('express');
var stylus = require('stylus');
var requirejs = require('requirejs');

var config = {
  baseUrl: __dirname + '/public/javascripts',
  name: 'main',
  out: __dirname + '/public/main.js'
};

requirejs.optimize(config, function(buildResponse) {
  var contents = fs.readFileSync(config.out, 'utf8');
});

var app = express();

app.set('view engine', 'jade');

app.use(stylus.middleware({
  src: __dirname + '/public/stylesheets',
  dest: __dirname + '/public'
}));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('hello');
});

app.listen(8080);
