# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

authors = ['Adam', 'Bob', 'Charlie', 'Dana', 'Elise']
category_names = %w(abstract animals business cats city food nightlife fashion people nature sports)

10.times do
  category = category_names.sample
  other_category = category_names.sample
  Post.create(author: authors.sample, photo_url: "http://lorempixel.com/400/400/#{category}/1", category_list: "#{category} #{other_category}")
end
