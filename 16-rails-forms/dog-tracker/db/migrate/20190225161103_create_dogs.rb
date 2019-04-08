class CreateDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :dogs do |t|
      t.string :name
      t.integer :tail_length
      t.string :color_hexadecimal
    end
  end
end
