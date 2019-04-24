class ComplimentsController < ApplicationController
  before_action :set_compliment, only: [:show, :update, :destroy]

  # GET /compliments
  def index
    @compliments = Compliment.all

    render json: @compliments
  end

  # GET /compliments/1
  def show
    render json: @compliment
  end

  # POST /compliments
  def create
    @compliment = Compliment.new(compliment_params)

    if @compliment.save
      render json: @compliment, status: :created, location: @compliment
    else
      render json: @compliment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /compliments/1
  def update
    if @compliment.update(compliment_params)
      render json: @compliment
    else
      render json: @compliment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /compliments/1
  def destroy
    @compliment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_compliment
      @compliment = Compliment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def compliment_params
      params.permit(:title, :favorited, :hug_count)
    end
end
