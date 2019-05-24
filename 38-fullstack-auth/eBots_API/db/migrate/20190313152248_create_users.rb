class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :username
      t.string :password_digest
      t.float :balance
      t.text :bio
      t.string :avatar_url

      t.timestamps
    end
  end
end
