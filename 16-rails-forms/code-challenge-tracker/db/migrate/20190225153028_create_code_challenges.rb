class CreateCodeChallenges < ActiveRecord::Migration
  def change
    create_table :code_challenges do |t|
      t.integer :mod
      t.string :name
    end
  end
end
