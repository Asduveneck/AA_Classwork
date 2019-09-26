class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false   # Author ID 
      t.integer :artwork_id, null: false  # Specific Artwork ID
      t.string :body, null: false         # Body of text
      t.timestamps
    end 

    # Add Index for author and Specific artwork
    # null: false? 

    add_index :comments, :author_id
    add_index :comments, :artwork_id

  end
end
