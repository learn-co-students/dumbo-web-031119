class ApplicationController < ActionController::Base

  before_action :setup_voting_stuff

  def setup_voting_stuff
    session["voter-count"] ||= 5
    @votes_remaining = session["voter-count"]
    @can_vote = @votes_remaining > 0
    @notification = flash["notification"]
  end

  def use_one_vote
    session["voter-count"] -= 1
  end

end