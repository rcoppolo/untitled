define(['backbone', 'views/song_view', 'models/song'], function(Backbone, SongView, Song) {

  var MixView = Backbone.View.extend({

    el: '#mixes',

    initialize: function() {
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
    },

    events: {
      'click .delete': 'deleteMix',
      'click .confirm': 'reallyDelete'
    },

    render: function() {
      var $this = this;
      $($this.el).empty();
      $($this.el).append("<span class='delete'>Delete this mix.</span>");
      this.model.songs.models.forEach(function(model) {
        var song_view = new SongView({ model: model });
        $($this.el).append(song_view.el);
      });
      return this;
    },

    deleteMix: function(e) {
      $(e.currentTarget).text("Really?").addClass("confirm");
    },

    reallyDelete: function() {
      this.model.destroy();
      Backbone.history.navigate("/", {'trigger': true});
    }

  });

  return MixView;

});
