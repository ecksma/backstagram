Backstagram.Views.PostList = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderPost);
  },

  renderPost: function(post) {
    var postView = new Backstagram.Views.Post({model: post});
    this.$el.append(postView.$el);
  }
});
