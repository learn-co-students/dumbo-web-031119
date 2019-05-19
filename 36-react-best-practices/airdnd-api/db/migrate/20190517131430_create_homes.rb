class CreateHomes < ActiveRecord::Migration[5.2]
  def change
    create_table :homes do |t|
      t.string :name
      t.string :description
      t.string :address
      t.integer :capacity
      t.string :image_url
      t.float :price_per_night
      t.belongs_to :city, foreign_key: true

      t.timestamps
    end
  end
end
