requirejs.config({
  baseUrl: 'javascripts',
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
  'backbone',
  'mix'

], function($, _, Backbone, Mix) {

  $(document).ready(function() {

    window.hey = new Mix();

  });

});
