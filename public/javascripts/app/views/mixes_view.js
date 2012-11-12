define(['support', 'views/mix_preview', 'models/mix', 'tpl!templates/mixes_view.html'], function(Support, MixPreview, Mix, template) {

  var MixesView = Support.CompositeView.extend({

    initialize: function() {
      this.collection.on('add', this.render, this);
      this.collection.on('save', this.render, this);
    },

    events: {
      'click #new': 'newMix',
      'submit #create': 'createMix'
    },

    render: function() {
      this.$el.html(template());
      this.renderMixes();
      return this;
    },

    renderMixes: function() {
      var self = this;
      var mixes_container = self.$('#mixes');
      mixes_container.empty();
      this.collection.forEach(function(model) {
        var mix_preview = new MixPreview({ model: model });
        self.appendChildTo(mix_preview, mixes_container);
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
