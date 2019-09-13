## Header 2

#disc class


#end

#game class

  #initialize
    # score variable
    # board
    
  #play game
    #loop until game over == true
      #prompt user

  #prompt
    #gets input from user
    #calls move disk

  #game over
    iterate through stack array
    You find that you have pieces on only one tower, then we've won the game. # caveat: can't be the starting position
    #all discs

    If we move a disk to the second, then back to the first that we want to exclude. 

    # when one is empty, and 2 and 3 are empty. 

    Game over if board[0].empty? and board[1..-1].one? # 

#end

#Board class

#initialize
  # board is the three element nested array
  # populate with disc instances in order, all on first tower

#valid_move
  #a bigger disc has to be on the destination tower

#move_discs(start,end)
  #calls valid_move
    if valid move
      #pop off origin disk, shovel on desintation tower
    if not valid
      #display message

#tower_empty?
  #returns true if no disc on tower 

# make_board 
  populate board with pushing a disk instance with a value of 5 into first array. 







bigger disk on bottom
game is to move disks over.
num of moves if what we track, along with game status 

prompt user:
  choose tower, move where?
  move top element, just like a stack

  each tower is an array 


prompt user for tower, and for destination
The lgoic will then evaluate whether it's a valid move. 
  Can't put a larger disk on top of the smaller disk.
  if not valid, reprompt
  If valid, move disks. Increment counter/moves by 1


game status
  All pieces will be in one array. 
  Can't be in last array unless they're ordered from smallest to biggest. 




