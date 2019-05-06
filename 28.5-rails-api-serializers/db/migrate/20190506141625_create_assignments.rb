class CreateAssignments < ActiveRecord::Migration[5.2]
  def change
    create_table :assignments do |t|
      t.string :name
      t.belongs_to :classroom, foreign_key: true

      t.timestamps
    end
  end
end
