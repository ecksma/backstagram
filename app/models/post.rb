class Post < ActiveRecord::Base
  def self.search(term)
    return Post.where("category_list LIKE ?", "%#{term}%")
  end
end
