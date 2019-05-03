class ToysController < ApplicationController
  def index
    @toys = Toy.order('id ASC')
    render json: @toys
  end

  def show
    @toy = Toy.find(params[:id])
    render json: {toy: ToySerializer.new(@toy), additional: "information"}
  end

  def create
    @toy = Toy.new(toy_params)
    if @toy.save
      render json: @toy
    else
      render json: {message: "YA CAN'T SAVE IT"}
    end
  end

  def update
    @toy = Toy.find(params[:id])
    @toy.update(toy_params)
    render json: @toy
  end

  def random
    @toy = Toy.all.sample
    render json: @toy
  end

  private
  def toy_params
    params.permit(:name, :likes, :image)
  end

end
