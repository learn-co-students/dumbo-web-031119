class CreateCats < ActiveRecord::Migration
  def change
    create_table :cats do |t|
      t.string :name
      t.integer :tail_length
      t.integer :fluffiness
      
    end
  end
end
