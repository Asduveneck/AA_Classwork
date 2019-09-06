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

end

#  describe "#add_child" do
#     it "should pass itself to the child's #parent=" do
#       expect(node3).to receive(:parent=).with(node2)
#       node2.add_child(node3)
#     end

#     it "doesn't add the child twice" do
#       node2.add_child(node3)
#       expect(node2.children).to eq([node3])
#     end
#   end