class LegsController < ApplicationController

  get "/legs/new" do
    @cats = Cat.all
    @leg = Leg.new
    erb :"legs/new"
  end

  post "/legs" do
    @leg = Leg.create(params[:leg])
    # redirect to "/cats/#{ @leg.cat.id }"
    redirect to "/cats/#{ @leg.cat_id }"
  end


end