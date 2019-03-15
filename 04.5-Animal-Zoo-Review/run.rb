require_relative "lib/Animal.rb"
require_relative "lib/Zoo.rb"
require 'pry'


#Test your code here
zoo1 = Zoo.new("Bronx Zoo", "The Bronx")
zoo2 = Zoo.new("Central Park Zoo", "Manhattan")
zoo3 = Zoo.new("Prospect Park Zoo", "Brooklyn")

animal1 = Animal.new("Rat", 100, "Ratty", zoo1)
animal4 = Animal.new("Rat", 200, "Ratticus", zoo1)

animal2 = Animal.new("Cat", 100, "Catty", zoo2)
animal3 = Animal.new("Turtles", 200, "Turty", zoo1)



binding.pry
puts "done"
