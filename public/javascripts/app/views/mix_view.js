define(['backbone', 'views/song_view'], function(Backbone, SongView) {

  var MixView = Backbone.View.extend({

    el: '#mixes',

    initialize: function() {
      this.model.on('change', this.render, this);
    },

    render: function() {
      var $this = this;
      $($this.el).empty();
      this.model.collection.forEach(function(model) {
        var song_view = new SongView({ model: model });
        $($this.el).append(song_view.el);
      });
      return this;
    }

  });

  return MixView;

});
