define(['backbone'], function(Backbone) {

  var Mix = Backbone.Model.extend({
    idAttribute: '_id',
    defaults: {
      plays: 0,
      locked: false
    }
  });

  return Mix;

});
