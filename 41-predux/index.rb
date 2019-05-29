cats = [
  { id: 1, name: "Whiskers"},
  { id: 2, name: "Wakanda"},
  { id: 3, name: "Dario"},
  { id: 4, name: "Beef"}
]

puts "Welcome to Katz"
puts "What would you like to do?"
puts "1. See cats"
puts "2. Add cat"
puts "3. Delete cat"

user_input = gets.chomp.to_i


case user_input
when 1
  # print cats
  print_cats
when 2
  # add cat
  add_cat
when 3
  # delete cat
else
  # default
end


def print_cats
  cats.each do |cat|
    puts cat[:name]
  end
end

def add_cat
  puts "What is the name of your cat?"
  name = gets.chomp

  cats << { id: cats.last[:id] + 1, name: name }

  cats.each do |cat|
    puts cat[:name]
  end
end
