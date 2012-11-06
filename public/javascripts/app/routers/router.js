define(['support', 'views/main', 'collections/mixes'], function(Support, Main, Mixes) {

  var Router = Support.SwappingRouter.extend({

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
