define(['backbone', 'views/mix_preview', 'tpl!templates/mixes_view.html'], function(Backbone, MixPreview, template) {

  var MixesView = Backbone.View.extend({

    initialize: function() {
      this.collection.on('add', this.render, this);
      this.collection.on('change', this.render, this);
    },

    render: function() {
      $('#middle').empty();
      $('#middle').html($(this.el).html(template({mix: this.model})));
      this.collection.forEach(function(model) {
        var mix_preview = new MixPreview({ model: model });
        $('#mixes').append(mix_preview.el);
      });
      return this;
    }

  });

  return MixesView;

});
