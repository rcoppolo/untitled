define(['backbone', 'collections/mixes', 'views/mixes_view', 'views/mix_view', 'tpl!templates/main.html'], function(Backbone, Mixes, MixesView, MixView, template) {

  var Main = Backbone.View.extend({

    el: 'body',

    renderMixes: function() {
      this.mixes_view = new MixesView({ collection: this.collection });
      this.mixes_view.render();
      return this;
    },

    renderMix: function(id) {
      this.mix_view = new MixView({ model: this.collection.get(id) });
      this.mix_view.render();
      return this;
    },

  });

  return Main;

});
