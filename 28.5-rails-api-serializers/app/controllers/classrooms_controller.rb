class ClassroomsController < ApplicationController
  def show
    @classroom = Classroom.find(params[:id])
    render json: @classroom
  end
end
