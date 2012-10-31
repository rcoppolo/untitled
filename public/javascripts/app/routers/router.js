define(['backbone', 'views/main', 'collections/mixes'], function(Backbone, Main, Mixes) {

  var Router = Backbone.Router.extend({

    initialize: function(options) {
      this.mixes = new Mixes(options.data.mixes);
      this.main = new Main({collection: this.mixes});
    },

    routes: {
      '': 'index',
      ':id': 'show'
    },

    index: function() {
      this.main.renderMixes();
    },

    show: function(id) {
      this.main.renderMix(id);
    }

  });

  return Router;

});
