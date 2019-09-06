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
  

end

