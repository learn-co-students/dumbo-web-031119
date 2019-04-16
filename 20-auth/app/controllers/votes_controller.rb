class VotesController < ApplicationController

  def index
    @votes = Vote.all
  end

  def create
    unless @logged_in
      redirect_to new_login_path
      return
    end
    if @logged_in_user.can_vote?
      @vote = Vote.create(color_id: params[:color_id], user_id: @logged_in_user.id)
      flash["notification"] = "You just voted for ##{ @vote.color.hex }"
    else
      flash["errors"] = ["You don't have any votes left 💁‍♀️"]
    end
    redirect_to colors_path
  end

  def destroy
    @vote = Vote.find(params[:id])
    if @logged_in_user.id == @vote.user_id
      @vote.destroy
    end
    redirect_to votes_path
  end

end

