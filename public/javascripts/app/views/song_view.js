define(['support', 'tpl!templates/song_view.html'], function(Support, template) {

  var SongView = Support.CompositeView.extend({

    initialize: function() {
      this.render();
    },

    events: {
      'click .song': 'toggleDetails',
      'click .delete_song': 'deleteSong'
    },

    render: function() {
      $(this.el).html(template({mix: this.model}));
      return this;
    },

    toggleDetails: function() {
      this.$('.details').toggleClass('show');
    },

    deleteSong: function() {
      var songs = this.model.collection;
      songs.remove(this.model);
      songs.save();
      this.leave();
    }

  });

  return SongView;

});
