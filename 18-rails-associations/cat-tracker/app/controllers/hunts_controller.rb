class HuntsController < ApplicationController


  def new
    @cats = Cat.all
    @mice = Mouse.all
    @hunt = Hunt.new
  end

  def create
    @hunt = Hunt.create(hunt_params)
    redirect_to cat_path(@hunt.hunter_cat)
  end


  private

  def hunt_params
    params.require(:hunt).permit(:hunter_cat_id, :hunted_mouse_id) 
  end

end
