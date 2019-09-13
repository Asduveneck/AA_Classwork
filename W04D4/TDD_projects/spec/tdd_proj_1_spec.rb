require "tdd_proj_1"

RSpec.describe "Our Functions" do 

  describe "Array#my_uniqs" do 
    it "should return uniqs from given array" do 
      expect([1, 2, 1, 3, 3].my_uniq).to eq([1, 2, 3])
    end
  end

  describe "Array#two_sum" do 
    it "finds all pairs of positions where elements at those positions sum to zero" do 
      expect([-1, 0, 2, -2, 1].two_sum ).to eq([[0, 4], [2, 3]])
    end
  end

  describe "#my_transpose" do  
    it "convert between the row-oriented and column-oriented representations" do
      a = [ [0, 1, 2], [3, 4, 5], [6, 7, 8] ]
      b = [ [0, 3, 6], [1, 4, 7], [2, 5, 8] ]
      expect(my_transpose(a)).to eq(b)
    end
  end

  describe "#stock_pick" do
    it "outputs profitable days to buy then sell" do
      price = [10, 30, 5, 100, 0]
      expect(stock_pick(price)).to eq([2,3])

      price2 = [10, 30, 5, 10, 100]
      expect(stock_pick(price2, false)).to eq([2,4])
    end
  end



end