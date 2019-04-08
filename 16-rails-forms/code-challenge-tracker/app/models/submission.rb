class Submission < ActiveRecord::Base
  belongs_to :code_challenge
  belongs_to :student
end

