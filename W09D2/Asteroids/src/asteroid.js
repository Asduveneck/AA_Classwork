const MovingObject = require("./moving_object");
const Util = require("./util");

const DEFAULT = {
  COLOR: "#de2666",
  RADIUS: 10,
  VEL_L: 20
};

function Asteroid(options) {
  if (options === undefined) {
    options = {};
    // this.pos: [250, 250]
  }
  // debugger
  options.pos = options.pos;
  // options.color = DEFAULT.COLOR; // We'll always overwrite custom with default.
  // // no bueno
  // options.radius = DEFAULT.RADIUS;
  options.vel = options.vel || Util.randomVec(DEFAULT.VEL_L); // length = vel? // Math.random(options.vel);
  options.color = (options.color || DEFAULT.COLOR);
  options.radius = (options.radius || DEFAULT.RADIUS);
  // debugger
  // const temp = MovingObject.call(this, options); 
  // return temp;
  MovingObject.call(this, options); 
};
Util.inherits(Asteroid, MovingObject)

module.exports = Asteroid;

