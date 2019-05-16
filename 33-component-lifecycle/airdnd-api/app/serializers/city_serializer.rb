class CitySerializer < ActiveModel::Serializer
  attributes :id, :name, :series, :image_url
end
