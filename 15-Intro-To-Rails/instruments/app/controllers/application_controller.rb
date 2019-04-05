require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get "/instruments" do
    @instruments = Instrument.all
    erb :index
  end

  get "/instruments/new" do
    @instruments = Instrument.new
    erb :new
  end

  get "/instruments/:id" do
    @instruments = Instrument.find(params[:id])
    erb :show
  end



end
