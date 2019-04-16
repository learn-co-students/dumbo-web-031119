class Cat < ApplicationRecord

  validates_presence_of :name, :color_hexadecimal
  validates :tail_length, numericality: { 
    greater_than_or_equal_to: 0, 
    less_than: 11,
    allow_nil: true
  }

  has_many :hunts, foreign_key: :hunter_cat_id
  has_many :hunted_mice, -> { distinct }, through: :hunts, source: :hunted_mouse
end
