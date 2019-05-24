class BotSerializer < ActiveModel::Serializer
	attributes :id, :name, :image_url, :price, :for_sale
	belongs_to :owner
end
