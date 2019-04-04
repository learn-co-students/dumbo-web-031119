class CreateLegs < ActiveRecord::Migration
  def change
    create_table :legs do |t|
      t.integer :length
      t.boolean :front_leg
      t.boolean :right_leg
      # t.integer :cat_id
      t.references :cat, foreign_key: true
      # t.belongs_to :cat, foreign_key: true
    end
  end
end
