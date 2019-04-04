class Cat < ActiveRecord::Base

  has_many :legs

  def self.search(search_term)
    self.where("name like ? ", "%#{ search_term }%")
  end 
end