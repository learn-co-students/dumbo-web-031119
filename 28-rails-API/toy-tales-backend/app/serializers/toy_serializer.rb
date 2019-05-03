class ToySerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :likes
end
