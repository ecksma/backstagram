class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :photo_url
      t.string :author
      t.string :category_list

      t.timestamps null: false
    end
  end
end
