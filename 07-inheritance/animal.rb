class Animal

  attr_accessor :name

  def initialize(name)
    @name = name
    # if self.class == Cat
    #   @num_lives = 9
    # end
    # p "🍩" * 100
  end

  def potty
    "💩"
  end

  def die
    self.speak.upcase
  end

  def speak
    @thing_this_animal_says
    # case self.class.name
    # when "Fish"
    #   "Blub"
    # when "Dog"
    #   "Arf"
    # when "Cat"
    #   "Miau"
    # end
  end

end


