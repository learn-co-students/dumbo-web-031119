class LoginController < ApplicationController

  def new
  end

  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      redirect_to colors_path
    else
      flash[:notification] = "Your username or password was incorrect"
      redirect_to new_login_path
    end
  end


end