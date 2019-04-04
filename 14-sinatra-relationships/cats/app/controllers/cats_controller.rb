class CatsController < ApplicationController

  get "/" do
    erb :welcome
  end

  get "/cats" do
    search_term = params[:query]
    if search_term && search_term.length > 0
      @cats = Cat.search(search_term)
    else 
      @cats = Cat.all
    end
    erb :"cats/index"
  end

  get "/cats/new" do
    @cat = Cat.new
    erb :"cats/new"
  end

  post '/cats' do
    @cat = Cat.new(params[:cat])
    @cat.save
    redirect to "/cats/#{ @cat.id }"
  end

  get '/cats/:id' do
    @cat = Cat.find_by(id: params[:id])
    # unless @cat
    #   response.status = 418
    #   "NOTHING HERE"
    # else
    erb :"cats/show"
    # end
  end

  get "/cats/:id/edit" do
    @cat = Cat.find(params[:id])
    erb :"cats/edit"
  end


  # params = {
  #   "_method"=>"PATCH"
  #   "name"=>"Potato", 
  #   "tail_length"=>"99", 
  #   "fluffiness"=>"99", 
  #   "id"=>"6"
  # }
  # params = {
  #   "_method"=>"PATCH",
  #   "cat"=> {
  #     "name"=>"Potato", 
  #     "tail_length"=>"99", 
  #     "fluffiness"=>"99", 
  #   },
  #   "id"=>"6"
  # }

  patch "/cats/:id" do
    @cat = Cat.find(params[:id])
    # params.delete("_method")
    @cat.update(params[:cat])
    redirect to "/cats/#{ @cat.id }"
  end

  delete '/cats/:id' do
    @cat = Cat.find(params[:id])
    @cat.destroy
    redirect to "/cats"
  end


  # get '/cats/3' do
  #   @cat = Cat.find_by(id: 3)
  #   erb :kitty_info
  # end

  # get '/cats/4' do
  #   @cat = Cat.find_by(id: 4)
  #   erb :kitty_info
  # end

end