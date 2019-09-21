class CreateShortenedUrl < ActiveRecord::Migration[5.2]
  def change
    create_table :shortened_urls do |t|
      t.text :long_url
      t.text :short_url
      t.integer :user_id
      t.timestamps
    end 

    add_index :shortened_urls, :short_url, unique: true
  end 

end
