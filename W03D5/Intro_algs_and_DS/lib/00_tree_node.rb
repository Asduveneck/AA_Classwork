require "byebug"

class PolyTreeNode
  attr_reader :value, :children, :parent

  def initialize(value, children = [], parent = nil)
        @value = value  
        @children = children 
        @parent = parent 
  end 

  def parent=(node) # Never returns anything. .
    # get the old parent node 
    old_parent = @parent
    old_parent.children.delete(self) if old_parent # delete node from old parent 
    @parent = node # @ for this instance only
    if node.nil? 
      @parent = nil 
      return ;
    end # handle nil
    node.children << self unless node.children.include?(self) # add child to 
     # parent only once
    
    return; 
  end 

  def add_child(child)
    child.parent = self
  end

  def remove_child(child)
    raise "Node is not a child" unless self.children.include?(child)
    # only works since for now, children is a public method.
    child.parent = nil
  end

  ########## Searching Part Here ##############
  def dfs(target)
    # 1. Check if node is target, if it is return node (base case)
    # 2. Iterate through node's children
    #     a. (recursive call)
    #        dfs(child, target)
    #        store this result
    #     b. If our result from (a) is not nil
    #         that means we got a node back,
    #           return result.
    # 3. Return nil (we went through the whole tree and nothing showed up)

    return self if self.value == target # 1
    self.children.each do |child|   # 2
      child_res = child.dfs(target)   # 2a
      return child_res unless child_res.nil? # 2b
    end
    return nil # 3
  end 

  def bfs(target)
    queue = Queue.new
    queue.enq(self)
    until queue.empty?
      next_node = queue.deq
      return next_node if next_node.value == target 
      # queue.enqueue(next_node.children)
      next_node.children.each {|child| queue.enq(child) }
    end 
    return nil
  end

end

# class Queue # doesn't do what we want.
# side effects?
#   def initialize
#     @ivar = Array.new
#   end
#     # We'll go from left to right.
#     # add to left side, export/leave the right

#   def enqueue(el) # Adds to left side of array
#     debugger
#     @ivar.shift(el)
#     # self
#     return;
#   end

#   def dequeue
#     @ivar.pop
#     # self
#     return;
#   end

#   def peek # returns, but doesn't remove, the top element in the stack
#     return @ivar[-1].dup 
#   end

# end