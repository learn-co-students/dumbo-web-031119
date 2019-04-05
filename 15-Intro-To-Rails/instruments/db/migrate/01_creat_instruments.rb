class creat_instruments < ActiveRecord::Migration
  def change
    create_table :instruments do |t|
      t.string :name
      t.string :brand
    end
  end

end
