# Inspiration from optimized Two Sum:

puts "Optimized Two Sums"
def two_sum?(arr,target)
  hash = {}
  arr.each do |el|
    return true if hash.has_key?(target-el)
    hash[el] = nil
  end
  false

end

arr = [0, 1, 5, 7]
p two_sum?(arr, 6)  == true
p two_sum?(arr, 10)   == false

## 4sum approach 1.
puts "Foursum first approach "

# Call Recursively on two_sum 3 times each time - target to see if we can get it to work...

def four_sum?(arr,target)
  hash = {}
  pairs = []
  arr.each_with_index do |el1,i| # this checks one number at a time. We need 3 random numbers at a time. But they won't necessarily be in order.
    arr.each_with_index do |el2,j|
      next if i <= j
      pairs << {el1=>i,el2=>j}
    end
  end


  pairs.each_with_index do |el,i|
    compliment = target - el.keys.sum
    if hash.has_key?(compliment)
      return true if hash[compliment].values.none? { |j| el.values.include?(j) }
    end
    hash[el.keys.sum] = el.values
  end
  false
end


test = [1, 1, 1, 1, 2]

p four_sum?(test, 4)
