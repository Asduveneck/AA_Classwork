def windowed_max_range(arr,range)
  current_max_range = 0

  (0..arr.length-range).each do |i|
    min = arr[i]
    max = arr[i]
    (i...(i + range) ).each do |j| # loop through smaller array if we found
      max = arr[j] if arr[j] > max
      min = arr[j] if arr[j] < min
    end
    rn = max - min
    current_max_range = rn if rn > current_max_range
  end
  return current_max_range
end

# why isn't the run time O(n*m) where n is arr length and m is range
p windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
p windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
p windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
p windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8

class MyQueue
  def initialize
    @store = []
  end

  def enqueue(el)
    @store << el
    nil
  end

  def dequeue
    @store.shift
  end

  def peek
    @store.first.dup
  end

  def empty?
    @store.empty?
  end

end

class MyStack
  def initialize
    @store = []
  end

  def pop
    @store.pop
  end

  def push(el)
    @store << el
    nil
  end

  def size
    @store.length
  end

  def peek
    @store.last.dup
  end

  def empty?
    @store.empty?
  end
end

class StackQueue

  attr_reader :store,:store2
  def initialize
    @store = MyStack.new
    @store2 = MyStack.new
  end

  def enqueue(el)
    @store.push(el)
  end

  def dequeue
    until @store.empty?
      @store2.push(@store.pop)
    end

    last = @store2.pop

    until @store2.empty?
      @store.push(@store2.pop)
    end
    last
  end

  def empty?
    @store.empty?
  end

  def size
    @store.length
  end

end

test = StackQueue.new
test.enqueue(1)
p test.store
test.enqueue(2)
p test.store
test.enqueue(3)
p test.store
test.dequeue
p test.store
test.enqueue(4)
p test.store
p test.store2

class MinMaxStack < MyStack

  attr_accessor :max, :min

  def initialize
    @store = []
    @max = nil
    @min = nil
  end

  def push(el)
    @max ||= el
    @min ||= el
    @max = el if el > @max
    @min = el if el < @min
    @store << el
  end
end

t = MinMaxStack.new
t.push(2)
p t.max


class MinMaxStackQueue < StackQueue

  def initialize
    @store = MinMaxStack.new
    @store2 = MinMaxStack.new
  end

  def min
    @store.min
  end

  def max
    @store.max
  end

end

def max_windowed_range(arr,range)
  current_max_range = 0
  (0..arr.length-range).each do |i|
    queue = MinMaxStackQueue.new
    (i...i+range).each do |j|
      queue.enqueue(arr[j])
    end
    rn = queue.max - queue.min
    current_max_range = rn if rn > current_max_range
  end
  current_max_range
end

p max_windowed_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
p max_windowed_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
p max_windowed_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
p max_windowed_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8
