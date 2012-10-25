define(['backbone', 'views/main'], function(Backbone, Main) {

  var Router = Backbone.Router.extend({

    routes: {
      '': 'index'
    },

    index: function() {
      var main = new Main();
      main.render();
    }
  });

  return Router;

});
