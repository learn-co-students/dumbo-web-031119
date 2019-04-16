class CreateMice < ActiveRecord::Migration[5.2]
  def change
    create_table :mice do |t|
      t.string :name
      t.float :tail_length
    end
  end
end
