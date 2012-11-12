define(['support', 'tpl!templates/mix_preview.html'], function(Support, template) {

  var MixPreview = Support.CompositeView.extend({

    initialize: function() {
      this.model.on('sync', this.render, this);
      this.render();
    },

    render: function() {
      $(this.el).html(template({mix: this.model}));
      return this;
    }

  });

  return MixPreview;

});
