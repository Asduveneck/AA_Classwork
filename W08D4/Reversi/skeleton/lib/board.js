let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  /*
  Make a 2d array
  array of length 8
  https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
  */
 // const grid = [];
 let grid = [];
  for (let index = 0; index < 8; index++) {
    const row = new Array(8);
    grid.push(row);
  };

  /*
    Prepopulate or assign the four center pieces.
    DON'T FORGET THAT WITH A CONSTRUCTOR FUNCTION, USE NEW! 
    */
   grid[3][3] = new Piece('white');
   grid[3][4] = new Piece('black');
   grid[4][3] = new Piece('black');
   grid[4][4] = new Piece('white');

   return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  let row = pos[0];
  let col = pos[1];

  let currBoard = this;
  if (currBoard.isValidPos(pos)) {
    if(currBoard.isOccupied(pos)) {
      return currBoard.grid[row][col];
    }
  } else {
    throw Error("Not valid pos!");
  } 
  // If it's a valid position, but there isn't a piece, return nothing
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
    //position =>
    // Check if position has a value and it's equal to the value being passed in
    let row = pos[0];
    let col = pos[1];

    if (this.isOccupied(pos)) { //if piece exists
      if (this.grid[row][col].color === color) {
        return true;
      }
      return false;
    }
    // return falsy

};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {

  let row = pos[0];
  let col = pos[1];

  if (!this.grid[row][col]) { // some way to find a falsey value
    return false;
  }
  else {
    return true;
  }

};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  let row = pos[0];
  let col = pos[1];

  // checks if any pos is put of bounds
  if ((row > 7 || col > 7 || row < 0 || col < 0 ) && pos.length === 2) { 
    return false;
  }
  return true;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
  // Board.DIRS  // This will be used when we CALL _positionsToFlip for the first time

  // Traveling in ONE DIRECTION ONLY. 
  let next_row = pos[0] + dir[0];
  let next_col = pos[1] + dir[1];
  let next_pos = [next_row, next_col];
  
  // let current_pos = next_pos;
  if(!board.isValidPos(next_pos)) { // If NOT a valid position
    return null;
  }


  if (!board.isOccupied(next_pos) ) { // If NOT OCCUPIED (no piece in that direction)
    // End of the board implies that the next piece is NOT occupied LOL
    return null;
  }
  // So we do have a next piece NOW! :)  
  let next_piece = board.getPiece(next_pos);

  // Check if new piece is the same color as ours. 
  if (next_piece.color === color) {
    if (piecesToFlip.length === 0) {
      return null;
    } else {
      return piecesToFlip;
    }
  }
  /* No more edge cases. Our next direction we're going in is a different color
    1. Reassign that next_piece's color.
    2. Push that position and return it as an array..?
    3. We call this method again recursively...
*/

    // next_piece.color = color;
    piecesToFlip.push(next_pos);
    return _positionsToFlip(board, next_pos, color, dir, piecesToFlip);

}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {

  let currBoard = this;
  // return false if position is already occupied 
  if(currBoard.isOccupied(pos)) {
    return false;
  }

  // iterate through board dirs and return true if we can flip any pieces on the way

  let c_row = pos[0];
  let c_col = pos[1];

  // forEach won't let you return early. Badgerballs!!!!
  (Board.DIRS).forEach(dir => {
    //let next_pos = [ (c_row + dir[0]), (c_col + dir[1]) ];
    let captured = _positionsToFlip(currBoard, pos, color, dir, []); 
          // Returns an array of all positions we flipped
    // check something... if array.length > 0 ?
    if(captured) { // if it's empty / null?
      return true;
    } 

  });

  return false;

};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

module.exports = Board;
