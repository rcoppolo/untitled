define(['backbone', 'views/mix_preview', 'models/mix', 'tpl!templates/mixes_view.html'], function(Backbone, MixPreview, Mix, template) {

  var MixesView = Backbone.View.extend({

    initialize: function() {
      this.collection.on('add', this.render, this);
      this.collection.on('save', this.render, this);
    },

    events: {
      'click #new': 'newMix',
      'submit #create': 'createMix'
    },

    render: function() {
      $(this.el).html(template());
      this.appendMixes();
      return this;
    },

    appendMixes: function() {
      var self = this;
      self.$('#mixes').empty();
      this.collection.forEach(function(model) {
        var mix_preview = new MixPreview({ model: model });
        self.$('#mixes').append(mix_preview.el);
      });
    },

    newMix: function(e) {
      $('#create').show().children('input').focus();
    },

    createMix: function(e) {
      e.preventDefault();
      mix = new Mix({title: $(e.currentTarget).children('input').val()});
      this.collection.add(mix);
      mix.save();
    }

  });

  return MixesView;

});
