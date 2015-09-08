Backstagram.Views.Search = Backbone.View.extend({
  el: '#search',

  events: {
    'keyup input': 'search'
  },

  search: function() {
    var term = this.$('input').val();

    this.searchCollection = new Backstagram.Collections.PostsCollection();
    this.searchCollection.url = "/posts?query=" + term;


    this.$("#search-results .post").remove();
    this.listView = new Backstagram.Views.PostList({collection: this.searchCollection});
    this.listView.$el = this.$("#search-results");

    this.searchCollection.fetch();
  }

});
