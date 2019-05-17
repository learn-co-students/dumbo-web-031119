class HomeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :address, :capacity, :image_url, :price_per_night
  has_one :city
end
