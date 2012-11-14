define(['underscore', 'backbone', 'player', 'collections/songs'], function(_, Backbone, Player, Songs) {

  var Mix = Backbone.Model.extend({

    idAttribute: 'id',

    defaults: {
      plays: 0,
      locked: false
    },

    initialize: function() {
      this.parseSongs();
      this.current = 0;
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
        Player.play(this.songs.models[index].get('url'));
      }
    }
  });

  return Mix;

});
