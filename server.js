var express = require('express');
var stylus = require('stylus');
var mongoose = require('mongoose');

app = express();

app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.db = mongoose.connect(process.env.MONGOLAB_URI ||
    "mongodb://localhost/untitled");
  app.set('view engine', 'jade');
  app.use(express.logger('dev'));
  app.use(stylus.middleware({
    src: __dirname + '/public/stylesheets',
    dest: __dirname + '/public',
    // compress: true
  }));
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
  app.use(express.errorHandler());
});

require('./routes');

var port = process.env.PORT || 8080;
app.listen(port);
console.log("Express server listening on port " + port);
