class CatsController < ApplicationController
  
  before_action :get_cat, only: [:show, :edit, :update, :destroy]

  def index
    @cats = Cat.all
  end

  def new
    @cat = Cat.new
  end

  def create
    # @cat = Cat.new(cat_params)
    # if @cat.save
    @cat = Cat.create(cat_params)
    if @cat.valid?
      redirect_to @cat
    else
      render :new
    end
  end

  def update
    if @cat.update(cat_params)
      redirect_to @cat
    else
      render :edit
    end
  end

  def destroy
    @cat.destroy
    redirect_to cats_path
  end

  private

  def cat_params
    params.require(:cat).permit(:name, :tail_length, :color_hexadecimal)
  end

  def get_cat
    @cat = Cat.find(params[:id])
  end

end
