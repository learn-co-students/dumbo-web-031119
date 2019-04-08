require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get "/submissions/new" do 
    @submission = Submission.new
    @submission.student_id = get_logged_in_student.id
    erb :new
  end

  post "/submissions" do 
    binding.pry
    @submission = Submission.create(params[:submission])
    redirect to "/submissions/#{ @submission.id }"
  end

  get "/submissions/:id" do 
    @submission = Submission.find(params[:id])
    erb :show
  end

  def get_logged_in_student
    Student.find_by(name: "Graham")
  end

end
