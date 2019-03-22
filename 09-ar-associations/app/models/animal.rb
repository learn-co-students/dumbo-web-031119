class Animal < ActiveRecord::Base
  

  # def escapes
  #   Escape.where(animal_id: self.id)
  # end
  has_many :escapes # _i_did, class_name: "Escape"


  has_many :zoos, through: :escapes #, class_name: "Zoo", source: :zoo # that the animal has escaped from
  # def zoo
  #   escapes.map do |escape|
  #     escape.zoo
  #   end
  # end

end