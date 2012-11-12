define(['support', 'tpl!templates/song_view.html'], function(Support, template) {

  var SongView = Support.CompositeView.extend({

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
