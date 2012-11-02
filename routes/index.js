var mongoose = require('mongoose');
var config = require('../config');

var song_schema = new mongoose.Schema({
  title: String,
  artist: String,
  key: String,
  url: String,
  starts: Number,
  ends: Number,
});

var Song = app.db.model('Song', song_schema);

var Mix = app.db.model('Mix', new mongoose.Schema({
  title: String,
  locked: Boolean,
  plays: Number,
  songs: [song_schema]
}));

app.get('/', function(req, res) {
  Mix.find(function(err, mixes) {
    res.render('hello', { mixes: mixes, sc_client_id: config.sc_client_id });
  });
});

app.get('/api/mixes', function(req, res) {
  return Mix.find(function(err, mixes) {
    return res.send(mixes);
  });
});

app.get('api/mixes/:id', function(req, res) {
  return Mix.findById(req.params.id, function(err, mix) {
    if(!err) {
      return res.send(mix);
    }
  });
});

app.post('/api/mixes', function(req, res) {
  var mix = new Mix({
    title: req.body.title,
    locked: req.body.locked
  });
  mix.save(function(err) {
    if(!err) {
      return console.log("Created " + mix.title);
    }
  });
  return res.send(mix);
});

app.put('/api/mixes/:id', function(req, res) {
  return Mix.findById(req.params.id, function(err, mix) {
    mix.title = req.body.title;
    mix.locked = req.body.locked;
    mix.songs = req.body.songs;
    return mix.save(function(err) {
      if(!err) {
        console.log("Updated " + mix.title);
      }
      return res.send(mix);
    });
  });
});

app.delete('/api/mixes/:id', function(req, res) {
  return Mix.findById(req.params.id, function(err, mix) {
    var titleDeleted = mix.title;
    return mix.remove(function(err) {
      if(!err) {
        console.log("Removed " + titleDeleted);
        return res.send('');
      }
    });
  });
});
