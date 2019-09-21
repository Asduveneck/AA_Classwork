class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      # unique emails
      t.string :email, null: false
      # timestamp 
      t.timestamps 
    end

    # add an index and make sure emails are unique
    add_index :users, :email, unique: true
  end
end


