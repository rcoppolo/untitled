define(['backbone', 'tpl!templates/mix_preview.html'], function(Backbone, template) {

  var MixPreview = Backbone.View.extend({

    initialize: function() {
      this.render();
    },

    render: function() {
      $(this.el).html(template({mix: this.model}));
      return this;
    }

  });

  return MixPreview;

});
