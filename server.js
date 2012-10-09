var express = require('express');
var stylus = require('stylus');

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
