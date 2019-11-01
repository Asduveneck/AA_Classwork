def my_min(arr)
  smallest = arr[0]
  arr.each_with_index do |el,i|           # Go through the array once O(n)
    arr.each_with_index do |el2,i2|       # Go through array again for each n; O(n) n times => O(n^2)
      next if i == i2                     # Skip same element
      smallest = el2 if el2 < smallest      # Reassign
    end
  end
  # p "Final smallest is #{smallest } "  # originally to catch error in reassign
  smallest
end                                     # O (n^2)

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
my_min(list)  # =>  -5
#Phase 2

def my_min(arr)                           # Find
  min = arr[0]

  arr.each do |el|                          # Go through array once O(n)
    min = el if el < min                    # update min while going through if found min
  end
  min
end

# PHase 1

def largest_contiguous_subsum(list)
  subarr(list).max_by { |subarr| subarr.sum}.sum          # Go through all subarrays, then find sum (2n-1)-1 possible subarrays => O(n)
end

def subarr(arr)
  new_arr = []
  (0...arr.length).each do |i|                      # Go through array once O(n)
    (i...arr.length).each do |j|                    # Slice through array again for each n (from the element you're on and beyond)... O(n-1) in worst case...
                                                     # so n * O(n) => O(n^2)
      new_arr << arr[i..j]                          #  And slice the array from index a to index b. Because indices change, we are doing an operation here (iterating through it) so another O(n) for each O(n)
    end
  end
  new_arr
end

list = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])

# phase 2

def largest_contiguous_subsum(list)
  rolling_sum = 0
  largest_sum = list[0]
  # reset the index if rolling sum to 0
  list.each_with_index do |el, idx|                         # Go through the array once
    rolling_sum += el                                       # Keep a rolling sum and add current element to it
    largest_sum = rolling_sum if rolling_sum > largest_sum   # Update the largest sum if your current rolling sum is greater (new largest rolling_sum)
    rolling_sum = 0 if rolling_sum < 0                        # Reset your rolling sum back to 0 if your rolling_sum is negative (negative means you won't be able to cancel out, so you need to reset it)
  end
  return largest_sum

end

list = [-3,-2,-5]
p largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])
