class CreateUsers < ActiveRecord::Migration[5.2]

  def change
    #users table definition goes here
    create_table :users do |t|
      t.string :name
      t.timestamps
    end
  end

end
