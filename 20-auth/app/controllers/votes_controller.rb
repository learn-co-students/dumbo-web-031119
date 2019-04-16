class VotesController < ApplicationController

  def index
    @votes = Vote.all
  end

  def create
    if @can_vote
      @vote = Vote.create(color_id: params[:color_id])
      use_one_vote
      flash["notification"] = "You just voted for ##{ @vote.color.hex }"
    else
      flash["notification"] = "You don't have any votes left 💁‍♀️"
    end
    redirect_to colors_path
  end

  def delete
    Vote.destroy(params[:id])
  end

end

