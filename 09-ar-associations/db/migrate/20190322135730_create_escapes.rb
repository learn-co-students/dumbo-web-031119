class CreateEscapes < ActiveRecord::Migration[5.2]
  def change
    create_table :escapes do |t|
      t.integer :zoo_id
      t.integer :animal_id
      t.timestamps
    end
  end
end
