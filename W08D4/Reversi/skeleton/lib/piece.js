/**
 * Initializes the Piece with its color.
 */
function Piece (color) {
  let possible_colors = ['white', 'black'];
  if(possible_colors.includes(color)) {
    this.color = color; 
  }
}

/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function () {
  let piece = this;

  if (piece.color === "white") {
    return "black";
  } else if (piece.color === "black") {
    return "white";
  }
};

/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function () {
  this.color = this.oppColor();
};

/**
 * Returns a string representation of the string
 * based on its color.
 */
Piece.prototype.toString = function () {
};

module.exports = Piece;
