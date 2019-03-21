require_relative "animal"
require_relative "fish"
require_relative "dog"
require_relative "cat"
require "pry"

dory = Fish.new("Dory")
elliott = Cat.new("Elliott")
einstein = Dog.new("Einstein")
peanut = Dog.new("Peanut")
teddy = Dog.new("Teddy")
gordon = Fish.new("Gordon")

# puts einstein.speak

Pry.start

false
