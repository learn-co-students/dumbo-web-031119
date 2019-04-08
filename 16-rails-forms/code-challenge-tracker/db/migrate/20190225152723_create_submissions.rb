class CreateSubmissions < ActiveRecord::Migration
  def change
    create_table :submissions do |t|
      t.integer :code_challenge_id
      t.string :link
      t.integer :student_id, foreign_key: true
      t.integer :grade
    end
  end
end
