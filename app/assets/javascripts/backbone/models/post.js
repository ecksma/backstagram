Backstagram.Models.Post = Backbone.Model.extend({
  paramRoot: 'post',
  url: '/posts'
})

Backstagram.Collections.PostsCollection = Backbone.Collection.extend({
  model: Backstagram.Models.Post,
  url: '/posts'
})
