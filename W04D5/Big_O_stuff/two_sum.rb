puts "Bad Two Sums"
def bad_two_sum(arr,target)
  pairs = []
  arr.each_with_index do |el1,idx1|
    arr.each_with_index do |el2,idx2|
      next if idx2 <= idx1
      #pairs << [idx1,idx2] if el1 + el2 == target
      return true if el1 + el2 == target
    end
  end
  false
end

arr = [0, 1, 5, 7]
p bad_two_sum(arr, 6)   == true
p bad_two_sum(arr, 10)  == false

puts "Okay Two Sums"
def okay_two_sum?(arr,target)
  arr.sort!

  (0...arr.length).each do |i|
    (arr.length-1).downto(0) do |j|
      next if i == j
      break if arr[i] + arr[j] < target
      return true if arr[i] + arr[j] == target
    end
  end
  false
end

arr = [0, 1, 5, 7]
p okay_two_sum?(arr, 6)   == true
p okay_two_sum?(arr, 10)  == false

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
