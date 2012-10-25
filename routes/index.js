var mongoose = require('mongoose');

var Mix = app.db.model('Mix', new mongoose.Schema({
  title: String,
  locked: Boolean,
  plays: Number
}));

app.get('/', function(req, res) {
  res.render('hello');
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
    return todo.save(function(err) {
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
