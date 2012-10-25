define(['backbone', 'templates/main'], function(Backbone, template) {

  var Main = Backbone.View.extend({

    _.templateSettings = { interpolate : /\{\{(.+?)\}\}/g };

    el: '#middle',
    template: template,

    events: {
      'click #click': 'hi'
    },

    render: function() {
      $(this.el).append("<span id='click'>Click here.</span>");
    },

    hi: function() {
      console.log("hello there.");
    }


  });

  return Main;

});
