require_relative "00_tree_node.rb"

class KnightPathFinder
  #Class Methods

  def self.valid_moves(pos) # (0,0)
    valids = []
    # establishing standards
    horiz = pos[0]
    vert = pos[1]

    # two sets of possible moves
    mv_1 = [1,2] # h, v  
    mv_2 = [2,1] # h,v 

    [mv_1, mv_2].each do |el|
      h = el[0]
      v = el[1]
      valids << [horiz + h, vert + v ] # + horiz, vert
      valids << [horiz + h, vert - v ]  
      valids << [horiz - h, vert + v ] #  horiz - h, vert
      valids << [horiz - h, vert - v ]  
    end
    valids.select do |move| 
      move.all? { |el| el >= 0 && el <= 7 }
    end # return only those in bound
  end
  
  #Instance Methods
  
  attr_reader :root_node
  
  def initialize(root_node = [0,0])
    @considered_positions = [root_node]
    @root_node = PolyTreeNode.new(root_node)
    self.build_move_tree
    # build_move_tree(root_node)
  end

  def new_move_pos(pos)
    all_moves = KnightPathFinder.valid_moves(pos)
    new_moves = all_moves.select { |move| !@considered_positions.include?(move)}
    @considered_positions += new_moves
    new_moves
  end

  def build_move_tree
    # 1) set up queue (with start)
    tree_queue = [@root_node]
    # 2) Until queue is empty

    until tree_queue.empty?
      # a) deq
      current = tree_queue.shift

      # b) create node from 2a (with children new_move_pos.each)
      new_move_pos(current.value).each do |mv| # broken here
        child = PolyTreeNode.new(mv)
        current.add_child(child)
        # c) add child to queue 
        tree_queue.push(child)
      end                       # end of do mv 

    end                         # end of until

  end                           # end of method

  # Phase III 

  def find_path(target) 
    destination = @root_node.bfs(target) 
    trace_path_back(destination)
  end 

  def trace_path_back(destination)
    path = [destination]
    until path.include?(root_node)
      # Add to the front of paths the parent of what's first
      path.unshift(path.first.parent)
    end 
    path.map(&:value)
  end

end                             # end of class knightpathfinder
