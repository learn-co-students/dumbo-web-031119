class CreateHunts < ActiveRecord::Migration[5.2]
  def change
    create_table :hunts do |t|
      t.integer :hunter_cat_id
      t.integer :hunted_mouse_id

      t.timestamps
    end
  end
end
