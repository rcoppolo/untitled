requirejs.config({
  baseUrl: 'javascripts',
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore' : {
      exports: '_'
    }
  },
  paths: {
    'models': 'app/models',
    'collections': 'app/collections',
    'views': 'app/views',
    'templates': 'app/templates'
  }
});

requirejs([

  'jquery',
  'underscore',
  'backbone',
  'app/routers/router'

], function($, _, Backbone, Router) {

  $(document).ready(function() {

    var router = new Router();
    Backbone.history.start();

  });

});
