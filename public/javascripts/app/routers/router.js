define(['support', 'views/mixes_view', 'views/mix_view', 'collections/mixes', 'models/mix'], function(Support, MixesView, MixView, Mixes, Mix) {

  var Router = Support.SwappingRouter.extend({

    initialize: function(options) {
      this.el = $('#middle');
      this.mixes = new Mixes(options.data.mixes);
      if (options.data.mix) {
        var mix = new Mix(options.data.mix);
        this.mixes.add(mix);
      }
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
