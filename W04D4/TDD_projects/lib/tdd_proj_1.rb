
class Array

  def my_uniq
    # ap 1
    # Create a new array
    # Iterate through self 
    # for each element, shovel it into new array if not already included.
    new_arr = []
    self.each { |el| new_arr << el unless new_arr.include?(el)} 
    new_arr 

    # self.map # instead of self.each will let us not initialize an array

    # Ap 2 not working
    # count? If the count of the element == 1, put it into the array. 
    # new_arr = []
    # self.each { |el| el << new_arr if self.count(el) == 1}
    # new_arr
  end 


  def two_sum
    pairs = []
    # using two ranges iterate through the array, and pull an i and j
    (0...self.length).each do |i|
      ((i+1)...self.length).each do |j|
        pairs << [i,j] if self[i] + self[j] == 0
      end
    end
    # if elements at i and j sum to zero, shovel them into pairs (as an array)
    pairs
  end

end

def my_transpose(arr)
  # iterate through array twice
  # (i,j) => (j,i)
  # created array of nils
  transposed = []

  arr.each.with_index do |ele, idx_1|
    transposed << Array.new(ele.length)
  end

  arr.each.with_index do |ele, idx_1|
    arr.each.with_index do |el2, idx_2|
      transposed[idx_2][idx_1] = arr[idx_1][idx_2]
    end
  end

  transposed
end

def stock_pick(arr_prices, consecutive = true)
  # Like a max value
  # keep track of profit made by selling any two days.
  # if profit is greater than max, then we'll want to log the profit
  # and the indices of those days.

  days = []
  max_profit = arr_prices[1] - arr_prices[0] # in case every day is a loss 

  # two element window and get profit for each of the days...
  if consecutive 
    (0...(arr_prices.length - 1)).each do |i|
      profit = arr_prices[i + 1] - arr_prices[i] 
      if profit > max_profit
        max_profit = profit 
        days = [i, i+1]
      end
    end 
  else 
    (0...(arr_prices.length)).each do |i|
      ((i+1)...(arr_prices.length)).each do |j|
        profit = arr_prices[j] - arr_prices[i] 
        if profit > max_profit
          max_profit = profit 
          days = [i, j]
        end # profit 
      end # j loop
    end # i loop 
  end # if consecutive = true or not 

  days
end

# def towers_hannoi # more like annoy
# end

