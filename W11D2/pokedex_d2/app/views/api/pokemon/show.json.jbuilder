json.set! @poke.id do
  json.extract! @poke, :id, :name, :attack, :defense, :moves, :poke_type
  json.image_url asset_path(@poke.image_url)
  json.item_ids @poke.item_ids
  # not best but whatever
end

json.items do
  @poke.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
        # json.image_url asset_path(@poke.items.image_url)
    end
  end
end

# json.extract! @poke, :id, :name, :attack, :defense, :moves, :poke_type
# json.image_url asset_path(@poke.image_url)
# json.item_ids @poke.item_ids
# json.items do
#   @poke.items.each do |item|
#     json.set! item.id do
#       json.extract! item, :id, :name, :pokemon_id, :price, :happiness
#       # json.image_url asset_path(@poke.items.image_url)
#     end
#   end
# end