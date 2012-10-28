define(['backbone', 'collections/mixes', 'views/mixes_view', 'tpl!templates/main.html'], function(Backbone, Mixes, MixesView, template) {

  var Main = Backbone.View.extend({

    el: 'body',

    render: function() {
      this.mixes_view = new MixesView({ collection: this.collection });
      this.mixes_view.render();
      return this;
    },

  });

  return Main;

});
