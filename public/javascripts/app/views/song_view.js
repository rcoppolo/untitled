define(['backbone', 'tpl!templates/song_view.html'], function(Backbone, template) {

  var SongView = Backbone.View.extend({

    initialize: function() {
      this.render();
    },

    render: function() {
      $(this.el).html(template({mix: this.model}));
      return this;
    }

  });

  return SongView;

});
