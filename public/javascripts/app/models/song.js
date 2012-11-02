define(['backbone'], function(Backbone) {

  var Song = Backbone.Model.extend({
    idAttribute: '_id',
    defaults: {
      starts: 0,
      ends: 0
    }
  });

  return Song;

});
