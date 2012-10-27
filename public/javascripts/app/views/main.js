define(['backbone', 'tpl!templates/main.html'], function(Backbone, template) {

  var Main = Backbone.View.extend({

    el: '#middle',

    events: {
      'click #click': 'hi'
    },

    render: function() {
      $(this.el).append(template({text: "hiya man."}));
    },

    hi: function() {
      console.log("hello there.");
    }


  });

  return Main;

});
