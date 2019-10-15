const Util = require("./util");

function MovingObject(options) {
  this.pos = options.pos; 
  this.vel = options.vel; 
  this.radius = options.radius; 
  this.color = options.color; 
};

 MovingObject.prototype.draw = function(ctx) { // ctx is canvas?
  // CTX is a drawing tool for canvas.
  // debugger;
  ctx.fillStyle = this.color;
  ctx.beginPath(); // makes sure that all of our object colors are defined. Begins a path for each object so there's no color collision
  // Needed for every project
  // no idea: 
  let x = this.pos[0];
   let y = this.pos[1];
  ctx.arc(x, y, this.radius, 0, 360); 
  ctx.fill(); // fill in here
};

MovingObject.prototype.move = function(ctx) {
  let x = this.pos[0];
  let y = this.pos[1];
  let x2 = x + this.vel[0];
  let y2 = x + this.vel[1];
  let new_pos = [x2, y2];
  this.pos = new_pos;
  return new_pos;
}


module.exports = MovingObject;
