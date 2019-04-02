require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

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
    erb :index
  end

  get '/cats/:id' do
    @cat = Cat.find_by(id: params[:id])
    # unless @cat
    #   response.status = 418
    #   "NOTHING HERE"
    # else
    erb :kitty_info
    # end
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
