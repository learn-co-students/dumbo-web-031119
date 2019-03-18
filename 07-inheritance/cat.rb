class Cat

  attr_reader :num_lives

  def initialize(name)
    @name = name
    @num_lives = 9
  end

  def speak
    "Miau"
  end
  
end