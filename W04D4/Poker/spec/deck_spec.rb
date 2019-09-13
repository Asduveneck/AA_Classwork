require "deck"


RSpec.describe do
  
  deck_ex = Deck.new

  describe "Deck" do
    it "should return an array of exactly 52 card instances" do
      expect(deck_ex.deck.length).to eq(52)
      expect(deck_ex.deck.all? { |card| card.is_a?(Card) } ).to eq(true)
    end
  end


end
