define(['backbone', 'views/mix_preview', 'models/mix'], function(Backbone, MixPreview, Mix) {

  var MixesView = Backbone.View.extend({

    el: '#mixes',

    initialize: function() {
      this.collection.on('add', this.render, this);
      this.collection.on('change', this.render, this);
    },

    events: {
      'click #new': 'newMix',
      'submit #create': 'createMix'
    },

    render: function() {
      var $this = this;
      $($this.el).empty();
      if (this.collection.length === 0) {
        $($this.el).append("<span id='new'>Shhh.</span>");
      } else {
        this.collection.forEach(function(model) {
          var mix_preview = new MixPreview({ model: model });
          $($this.el).append(mix_preview.el);
        });
      }
      return this;
    },

    newMix: function(e) {
      target = $(e.currentTarget)
      container = target.parent();
      target.remove();
      container.append("<form id='create'><input placeholder='Type here.'></input></form>");
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
