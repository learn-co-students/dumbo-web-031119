class User < ApplicationRecord
	has_many :bots, foreign_key: "owner_id"

	validates :username, uniqueness: true
	has_secure_password
end
