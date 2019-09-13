require_relative "card.rb"

class Deck

  attr_reader :deck

  def initialize
    suits = %w(spade club heart diamond)
    @deck = []
    suits.each do |s|
      (1..13).each do |val|
        @deck << Card.make_card(val, s)
      end
    end
  end

  def shuffle
    @deck.shuffle!
  end

  def draw
    @deck.pop
  end

  def new_deck
    Deck.new
  end

end
