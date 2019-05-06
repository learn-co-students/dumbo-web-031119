class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject, :professor_name, :upcased_name
  has_many :classrooms
  # has_many :assignments

  def upcased_name
    teacher = self.object
    teacher.name.upcase
  end
end
