class UserSerializer < ActiveModel::Serializer
	attributes :id, :name, :username, :balance, :bio, :avatar_url

	has_many :bots
end
