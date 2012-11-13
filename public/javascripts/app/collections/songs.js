define(['backbone', 'models/song'], function(Backbone, Song) {

  var Songs = Backbone.Collection.extend({

    model: Song,

    initialize: function(attrs, options) {
      if (options.parent) {
        this.mix = options.parent;
      }
    },

    save: function() {
      this.mix.save();
    }
  });

  return Songs;

});
