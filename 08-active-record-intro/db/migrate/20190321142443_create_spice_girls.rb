class CreateSpiceGirls < ActiveRecord::Migration[5.2]
  def change
    create_table :spice_girls do |t|
      t.string :name
      t.integer :spicyness
      t.datetime :birth_date
      t.timestamps
    end
  end
end
