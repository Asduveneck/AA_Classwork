/*
DIM_X, DIM_Y, and NUM_ASTEROIDS
*/


const DEFAULT = {
  COLOR: "#b0e8e5",
  DIM_X: 9001,
  DIM_Y: 9001,
  NUM_ASTEROIDS: 3
};

function Game(options) {
  asteroids = [];
  options.COLOR = (options.COLOR || DEFAULT.COLOR)
  options.DIM_X = (options.DIM_X || DEFAULT.DIM_X),
  options.DIM_Y = (options.DIM_Y || DEFAULT.DIM_Y),
  options.NUM_ASTEROIDS = (options.NUM_ASTEROIDS || DEFAULT.NUM_ASTEROIDS),
  
  this.addAsteroids();
}


Game.prototype.randomPosition = function () {
  // Random X
  // Random Y
  let x_rand = Math.random * Game.Dim_X;
  let y_rand = Math.random * Game.Dim_Y;
  return [x_rand, y_rand];
};

Game.prototype.allObjects = function () {
  return [].concat(this.asteroids);
};


Game.prototype.addAsteroids = function() {
  // calls randomPosition 
  // stores position in Game.asteroids array
  for(let i = 0; i <= Game.NUM_ASTEROIDS; i++) {
    new_coord = Game.randomPosition(); 
    Game.asteroids.push(new_coord)
  }
};


Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)
  ctx.fillStyle = Game.COLOR;
  ctx.fill(0, 0, Game.DIM_X, Game.DIM_Y);
  
  this.allObjects().forEach(function(object) {
    object.draw(ctx);
  });

};
Game.prototype.moveObjects = function() {

  this.allObjects().forEach(function(object) {
    object.move();
  });

};

 module.exports = Game;