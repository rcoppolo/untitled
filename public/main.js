requirejs.config({
  baseUrl: '/javascripts',
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore' : {
      exports: '_'
    },
    'jquery.rdio' : ['jquery']
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
  'support',
  'app/routers/router',
  'bootstrap',
  'jquery.rdio'

], function($, _, Backbone, Support, Router, data) {

  $(document).ready(function() {

    window.heyy = Support;

    var router = new Router({data: data});
    Backbone.history.start({pushState: true});

    // $rdio = $('#rdio');
    // $rdio.rdio('GAlNi78J_____zlyYWs5ZG02N2pkaHlhcWsyOWJtYjkyN2xvY2FsaG9zdEbwl7EHvbylWSWFWYMZwfc=');
    // $rdio.on('ready.rdio', function() {
    //   console.log('playing');
    //   $(this).rdio().play('t16930593');
    // });

    // SC.get('/resolve', {url: 'http://soundcloud.com/ofwgkta-official/chum'}, function(track) {
    //   SC.stream('/tracks/' + track.id, function(sound) {
    //     sound.play();
    //   });
    // });

    $(document).on('click', 'p', function(e) {
      var href = $(this).attr('data-href');
      var protocol = this.protocol + '//';
      if (href
        && href.slice(0, protocol.length) !== protocol
        && !/javascript/.test(href)) {
          e.preventDefault();
          Backbone.history.navigate(href, true);
      }

    });

  });

});
