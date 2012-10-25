define(['backbone', 'models/mix'], function(Backbone, Mix) {

  var Mixes = Backbone.Collection.extend({
    url: '/api/mixes',
    model: Mix
  });

  return Mixes;

});
