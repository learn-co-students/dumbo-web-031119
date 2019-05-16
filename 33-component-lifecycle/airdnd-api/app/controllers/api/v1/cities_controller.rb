class Api::V1::CitiesController < ApplicationController
  def index
    cities = City.all

    render json: cities
  end

  def create
    city = City.new(city_params)

    if city.save
      render json: city
    else
      render json: {errors: city.errors}
    end
  end

  def city_params
    params.permit(:name, :image_url, :series)
  end
end
