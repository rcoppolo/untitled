define(['underscore', 'backbone', 'collections/songs'], function(_, Backbone, Songs) {

  var Mix = Backbone.Model.extend({
    idAttribute: 'id',
    defaults: {
      plays: 0,
      locked: false
    },
    initialize: function() {
      this.parseSongs();
    },

    parseSongs: function() {
      var attr_songs = this.get('songs');
      this.songs = new Songs(attr_songs, { parent: this });
    },

    toJSON: function() {
      var json = _.clone(this.attributes);
      json.songs = this.songs.toJSON();
      return json;
    }
  });

  return Mix;

});
