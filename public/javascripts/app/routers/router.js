define(['support', 'views/mixes_view', 'views/mix_view', 'collections/mixes'], function(Support, MixesView, MixView, Mixes) {

  var Router = Support.SwappingRouter.extend({

    initialize: function(options) {
      this.mixes = new Mixes(options.data.mixes);
    },

    routes: {
      '': 'index',
      ':id': 'show'
    },

    index: function() {
      var mixes_view = new MixesView({ collection: this.mixes });
      this.swap(mixes_view);
    },

    show: function(id) {
      var mix_view = new MixView({ model: this.mixes.get(id) });
      this.swap(mix_view);
    }

  });

  return Router;

});
