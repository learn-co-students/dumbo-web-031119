class Api::V1::BotsController < ApplicationController
	def toggle_sale
		bot = Bot.find(params[:id])

		bot.update(for_sale: !bot.for_sale)

		render json: bot
	end

	def index
		bots = Bot.where(for_sale: true)

		render json: bots
	end

	def purchase
		user = session_user


		bot = Bot.find(params[:id])

		user.update(
			balance: user.balance - bot.price
		)

		bot.update(
			owner_id: user.id,
			for_sale: false
		)
		
		render json: {
			user: UserSerializer.new(user), 
			bot: BotSerializer.new(bot)
		}
	end
end