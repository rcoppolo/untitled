define(['underscore', 'backbone', 'collections/songs'], function(_, Backbone, Songs) {

  var Mix = Backbone.Model.extend({

    idAttribute: 'id',

    defaults: {
      plays: 0,
      locked: false
    },

    initialize: function() {
      this.parseSongs();
      this.current = 0;
      this.player = $('#player');
      $(this.player).attr('src', this.songs.models[0].get('url'));
      self = this;
      $(this.player).on('ended', function() {
        self.next();
      });
    },

    parseSongs: function() {
      var attr_songs = this.get('songs');
      this.songs = new Songs(attr_songs, { parent: this });
    },

    toJSON: function() {
      var json = _.clone(this.attributes);
      json.songs = this.songs.toJSON();
      return json;
    },

    play: function(index) {
      if (this.songs.length > 0) {
        if (index) {
          $(this.player).attr('src', this.songs.models[index].get('url'));
          this.player[0].play();
        } else {
          this.player[0].play();
        }
      }
    },

    pause: function() {
      this.player[0].pause();
    },

    next: function() {
      if (this.current < this.songs.length - 1) {
        this.current = this.current + 1;
        $(this.player).attr('src', this.songs.models[this.current].get('url'));
        this.player[0].play();
      } else {
        $('#pause').trigger('done');
      }
    }

  });

  return Mix;

});
