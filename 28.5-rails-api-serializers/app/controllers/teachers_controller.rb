class TeachersController < ApplicationController
  def show
    @teacher = Teacher.find(params[:id])
    render json: {info: TeacherSerializer.new(@teacher)}, include: "**"
  end
end
