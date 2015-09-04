Backstagram.Views.Post = Backbone.View.extend({
  className: "post",

  initialize: function() {
    this.template = HandlebarsTemplates['posts/show'];
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }
});
