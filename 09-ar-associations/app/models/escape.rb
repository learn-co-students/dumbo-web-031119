class Escape < ActiveRecord::Base


  # belongs to animal
  belongs_to :animal #, { foreign_key: "animal_id", class_name: "Animal" }
  # def animal
  #   # return the animal instance that escaped this time
  #   # binding.pry
  #   Animal.find(self.animal_id)
  # end

  # belongs to zoo
  belongs_to :zoo
  # def zoo
  #   # return the zoo that the animal escaped from
  #   Zoo.find_by(id: self.zoo_id)
  # end



end