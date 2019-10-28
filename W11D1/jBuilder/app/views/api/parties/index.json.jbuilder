# @parties.each do |party|
#   json.set! party.id do
#     json.extract! party, :name, :location
#   end
# end
json.array! @parties, :name, :location, :guests