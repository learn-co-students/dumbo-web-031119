require './config/environment'

class ApplicationController < Sinatra::Base

  # def initialize
  #   super
  #   puts "New ApplicationController 🌮"
  #   p params
  # end

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end


end
