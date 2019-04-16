class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    # byebug
    @user = User.create(user_params)
    redirect_to colors_path
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end