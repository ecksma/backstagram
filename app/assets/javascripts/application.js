// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require handlebars.runtime
//= require_tree ./backbone/templates
//= require backbone
//= require backbone_rails_sync
//= require backbone_datalink
//= require_self
//= require_tree .

Backstagram = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {}
};

$(document).ready(loadBackstagram);

function loadBackstagram() {
  searchView = new Backstagram.Views.Search();

  popular_posts = new Backstagram.Collections.PostsCollection();
  popular_posts.url = "/posts/popular";
  popularPostsView = new Backstagram.Views.PostList({collection: popular_posts});
  popularPostsView.$el = $('#popular_posts');
  popular_posts.fetch();

  recent_posts = new Backstagram.Collections.PostsCollection();
  recent_posts.url = "/posts/recent";
  recentPostsView = new Backstagram.Views.PostList({collection: recent_posts});
  recentPostsView.$el = $('#recent_posts');
  recent_posts.fetch();
}
