class Resetter

	def self.generate_name
		alphabet = ('A'..'z').to_a
		digits = ('0'..'9').to_a

		bot_name = ""

		[1,2,3].sample.times do 
			bot_name = bot_name + alphabet.sample
		end

		bot_name = bot_name + '-' + digits.sample + digits.sample
		bot_name
	end

	def self.generate_users
		30.times do |x|

			name = Faker::Name.name
			User.create({
				name: name,
				username: Faker::Games::SuperSmashBros.fighter.gsub(" ", "-") + (x+1).to_s,
				password: "123",
				balance: (30..200).to_a.sample.to_f,
				bio: Faker::Hipster.paragraph(2),
				avatar_url: "https://robohash.org/#{name.gsub(" ", "")}.png?size=300x300&set=set4"
			})

		end
	end


	def self.generate_bots
		100.times do 

			Bot.create({
				name: self.generate_name,
				image_url: Faker::Avatar.image,
				price: (50..100).to_a.sample.to_f,
				for_sale: true,
				owner: User.all.sample
				})
		end
	end

	def self.destroy
		Bot.destroy_all
	end

	def self.reset
		Resetter.destroy
		Resetter.generate_users
		Resetter.generate_bots
	end
end