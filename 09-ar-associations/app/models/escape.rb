class Escape < ActiveRecord::Base


  # belongs to animal
  def animal
    # return the animal instance that escaped this time
  end

  # belongs to zoo
  def zoo
    # return the zoo that the animal escaped from
  end



end