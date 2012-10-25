requirejs.config({
  baseUrl: 'javascripts',
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

requirejs([

  'jquery',
  'underscore',
  'backbone',
  'app/models/mix'

], function($, _, Backbone, Mix) {

  $(document).ready(function() {


  });

});
