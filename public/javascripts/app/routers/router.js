define(['backbone', 'views/main', 'collections/mixes'], function(Backbone, Main, Mixes) {

  var Router = Backbone.Router.extend({

    initialize: function(options) {
      this.mixes = new Mixes(options.data.mixes);
    },

    routes: {
      '': 'index'
    },

    index: function() {
      var main = new Main({collection: this.mixes});
      main.render();
    }
  });

  return Router;

});
