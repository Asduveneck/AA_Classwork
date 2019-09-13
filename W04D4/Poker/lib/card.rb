class Card
  SUITE = %w(spade club heart diamond)

  def initialize(val, suite)
    @val_suite = [val, suite]
  end 

  def self.make_card(val, suite) 
    card = [val, suite] 
    demo = Card.new(*card)
    return demo if demo.valid_card?(*card)
  end

  def valid_card?(val, suite)
    raise "Provide a number 1-13 first" unless val.between?(1,13)
    
    raise "Provide a valid suit: spade, club, heart, diamond" unless  SUITE.include?(suite)
    
    return true

  end

 

end