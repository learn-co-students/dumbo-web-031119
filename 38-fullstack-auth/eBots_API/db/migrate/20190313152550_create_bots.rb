class CreateBots < ActiveRecord::Migration[5.2]
  def change
    create_table :bots do |t|
      t.string :name
      t.string :image_url
      t.float :price
      t.integer :owner_id
      t.boolean :for_sale

      t.timestamps
    end
  end
end
