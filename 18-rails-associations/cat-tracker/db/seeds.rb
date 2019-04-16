# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Cat.create!(name: "Pusheen", tail_length: 10, color_hexadecimal: "#ddd")
Cat.create!(name: "Bukas", tail_length: 10, color_hexadecimal: "#A0522D")
Cat.create!(name: "Massapequa", tail_length: 10.999)
Cat.create!(name: "Danko", tail_length: 9)
Cat.create!(name: "Asland")
Cat.create!(name: "Tootsie", color_hexadecimal: "#8B4513")


Mouse.create!(name: "Jerry")
Mouse.create!(name: "Mickey")
Mouse.create!(name: "Mighty")
Mouse.create!(name: "Stuart Litte")
Mouse.create!(name: "Ratatouille")