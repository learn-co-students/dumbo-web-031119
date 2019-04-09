class CreateCats < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.string :name
      t.float :tail_length
      t.string :color_hexadecimal

      t.timestamps
    end
  end
end
