define(['backbone'], function(Backbone) {

  var Mix = Backbone.Model.extend({
    defaults: {
      plays: 0,
      locked: false
    }
  });

  return Mix;

});
