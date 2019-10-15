/*
DIM_X, DIM_Y, and NUM_ASTEROIDS
*/


const DEFAULT = {
  DIM_X: 9001,
  DIM_Y: 9001,
  NUM_ASTEROIDS: 500
};

function Game(options) {
  asteroids = [];
  options.DIM_X = (options.DIM_X || DEFAULT.DIM_X),
  options.DIM_Y = (options.DIM_Y || DEFAULT.DIM_Y),
  options.NUM_ASTEROIDS = (options.NUM_ASTEROIDS || DEFAULT.NUM_ASTEROIDS),
  
  

}

Game.prototype.addAsteroids = function() {

};

Game.prototype.randomPosition = function () {

};

Game.prototype.draw(ctx) {
  // calls ctx.clearRect
}

// module.exports = Game;