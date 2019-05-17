class Api::V1::HomesController < ApplicationController
  def create
    home = Home.new(home_params)

    if home.save
      render json: home
    else
      render json: {errors: home.errors.full_messages}
    end
  end

  private

  def home_params
    params.permit(:name, :description, :capacity, :address. :city_id, :image_url, :price_per_night)
  end
end
