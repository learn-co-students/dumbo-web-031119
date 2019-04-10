class Cat < ApplicationRecord

  validates_presence_of :name, :color_hexadecimal
  validates :tail_length, numericality: { 
    greater_than_or_equal_to: 0, 
    less_than: 11,
    allow_nil: true
  }

  


end
