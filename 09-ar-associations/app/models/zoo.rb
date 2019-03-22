class Zoo < ActiveRecord::Base

  has_many :escapes
  has_many :animals, through: :escapes


end