requirejs.config({
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
  }
});

requirejs([

  'jquery',
  'underscore',
  'backbone'

], function($, _, Backbone) {

});
