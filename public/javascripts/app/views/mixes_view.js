define(['backbone', 'views/mix_preview'], function(Backbone, MixPreview) {

  var MixesView = Backbone.View.extend({

    el: '#mixes',

    initialize: function() {
      this.collection.on('add', this.render, this);
      this.collection.on('change', this.render, this);
      window.hey = this;
    },

    render: function() {
      var $this = this;
      $($this.el).empty();
      this.collection.forEach(function(model) {
        var mix_preview = new MixPreview({ model: model });
        $($this.el).append(mix_preview.el);
      });
      return this;
    }

  });

  return MixesView;

});
