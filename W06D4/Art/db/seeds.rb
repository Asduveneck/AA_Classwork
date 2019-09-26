# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

artworks = Artwork.create([
{title: "Lisa Mona",
image_url: "www.flicker.com",
artist_id: 4},

{title: "Lisa Mona",
image_url: "www.flickers.com",
artist_id: 5},

{title: "Blinking Polar Bear Inside of a Blizzard",
image_url: "www.bing.com",
artist_id: 5},

{title: "Test",
image_url: "www.h4x0r.com",
artist_id: 4}
]) 

users = User.create([
  {
    id: 4,
    username: "Ash Ketchum",
    created_at: "2019-09-26T18:45:39.534Z",
    updated_at: "2019-09-26T18:45:39.534Z"
  },
  {
    id: 3,
    username: "Ezio Rasputin",
    created_at: "2019-09-26T18:38:43.773Z",
    updated_at: "2019-09-26T18:52:33.354Z"
  },
  {
    id: 5,
    username: "Bob Ross",
    created_at: "2019-09-26T18:53:10.688Z",
    updated_at: "2019-09-26T18:53:10.688Z"
  }
])
