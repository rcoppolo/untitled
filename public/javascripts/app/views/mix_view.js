define(['backbone', 'views/song_view', 'models/song', 'tpl!templates/mix_view.html'], function(Backbone, SongView, Song, template) {

  var MixView = Backbone.View.extend({

    initialize: function() {
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
    },

    events: {
      'click .delete': 'deleteMix',
      'click .confirm': 'reallyDelete'
    },

    render: function() {
      $('#middle').empty();
      $('#middle').html($(this.el).html(template({mix: this.model})));
      this.model.songs.models.forEach(function(model) {
        var song_view = new SongView({ model: model });
        $('#mixes').append(song_view.el);
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
