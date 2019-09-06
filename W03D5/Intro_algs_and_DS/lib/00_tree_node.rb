class PolyTreeNode
    def initialize(value, children = [], parent = nil)
        @value = value  
        @children = children 
        @parent = parent 
    end 
    
    

end

# Something like this I got notes from today so ... 

# Looks good to me; gives us a solid start

class Node
  attr_reader :value, :children # only done to play around

  def initialize(value, children = [])
    @value = value
    @children = children
  end
end  