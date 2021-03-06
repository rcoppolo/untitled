define(['support', 'views/song_view', 'models/song', 'tpl!templates/mix_view.html'], function(Support, SongView, Song, template) {

  var MixView = Support.CompositeView.extend({

    initialize: function() {
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.leave, this);
    },

    events: {
      'click .delete': 'deleteMix',
      'click .confirm': 'reallyDelete',
      'click #new': 'newSong',
      'submit #create': 'createSong',
      'click #play': 'playMix',
      'click #pause': 'pauseMix',
      'done #pause': 'done',
      'click #again': 'startOver'
    },

    render: function() {
      this.$el.html(template({mix: this.model}));
      this.renderSongs();
      return this;
    },

    renderSongs: function() {
      var self = this;
      var songs_container = self.$('#songs');
      this.model.songs.models.forEach(function(model) {
        var song_view = new SongView({ model: model });
        self.appendChildTo(song_view, songs_container);
      });
    },

    deleteMix: function(e) {
      $(e.currentTarget).text("Really?").addClass("confirm");
    },

    reallyDelete: function() {
      this.model.destroy();
      Backbone.history.navigate("/", {'trigger': true});
    },

    newSong: function(e) {
      $('#create').show().children('input').focus();
    },

    createSong: function(e) {
      e.preventDefault();
      song = new Song({url: $(e.currentTarget).children('input').val()});
      this.model.songs.add(song);
      this.model.save();
    },

    playMix: function() {
      this.model.play(0);
      $('#play').parent().prepend("<p id='pause'>Pause</p>");
      $('#play').remove();
    },

    pauseMix: function() {
      this.model.pause();
      $('#pause').parent().prepend("<p id='play'>Play</p>");
      $('#pause').remove()
    },

    startOver: function() {
      this.model.play(0);
    },

    done: function() {
      $('#pause').parent().prepend("<p id='again'>Start over?</p>");
      $('#pause').remove()
    }

  });

  return MixView;

});
