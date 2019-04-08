class DogsController < ApplicationController

  before_action :get_dog_by_id, only: [:show, :edit, :update, :destroy]
  
  def index
    @dogs = Dog.all
  end

  def show
  end

  def new
    @dog = Dog.new
  end

  def create
    @dog = Dog.create(dog_params)
    # redirect new_dog_path
    # redirect_to dog_path(@dog.id)
    # redirect_to dog_path(@dog)
    redirect_to @dog
  end


  def edit
  end

  def update
    @dog.update(dog_params)
    redirect_to @dog
  end

  def destroy
    @dog.destroy
    redirect_to dogs_path
  end

  private

  def get_dog_by_id
    @dog = Dog.find(params[:id])
  end

  def dog_params
    params.require(:dog).permit(:name, :tail_length, :color_hexadecimal)
  end

end
