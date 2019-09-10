require_relative 'tic_tac_toe'

class TicTacToeNode

  attr_reader :board, :next_mover_mark, :prev_move_pos

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board 
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)
      #Base case # Board is over AND 
        # Winner is the opponent, this is a losing node  (true)
        # Winner is nil or us, this is NOT a losing node (false)
    if @board.over? 
      return evaluator != @board.winner
    end

      #Recursive
        #Player's turn and all children nodes are losers
        children.all? { |board| board.losing_node?(evaluator)}
        # OR
        #Opponent turn and one of children is loser
  end

  ################
    def over?
    # don't use Ruby's `or` operator; always prefer `||`
    won? || tied?
  end

  def winner
    (rows + cols + diagonals).each do |triple|
      return :x if triple == [:x, :x, :x]
      return :o if triple == [:o, :o, :o]
    end

    nil
  end
  ##################


  def winning_node?(evaluator)
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children 
    children = [] 
    # Iterate through board (rows then squares) 
    @board.rows.each_with_index do |row, idx1|
      row.each_with_index do |tile, idx2| 
        pos = []
        pos.push(idx1, idx2) # row, col
        if tile.empty?
          dupl = TicTacToeNode(@board.dup)
          dupl[pos] = next_mover_mark
          children << dupl
          # Set prev_move_pos to position we just marked
          @prev_move_pos = pos
          # Alternate next_mover_mark
          @prev_move_pos = ((@prev_move_pos == :x) ? :o : :x)

        end
      end 
    end
    # If square is empty .empty?
      # Dup the board and add a next_mover_mark @ square position 
      # Set prev_move_pos to the position we just marked.

  end
end
