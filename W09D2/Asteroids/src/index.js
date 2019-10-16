console.log("Webpack is working")
//const ERROR_HERE

// File Requirements:
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid");
const Game = require("./game");




// Testing Ground
const mo = new MovingObject({
  pos: [30, 30],
  vel: [10, 10],
  radius: 5,
  color: "#00FF00"
});

const ast = new Asteroid({
  pos: [90, 90] 
  //everything else is given/implied/defaulted

});

const ast2 = new Asteroid({
  pos: [130, 130],
  color: "#2651de", 
  radius: 20, 
  vel: [10, 10]
});

const game1 = new Game({

});


// shove to window scope
window.mo = mo;
window.MovingObject = MovingObject;
window.ast = ast;
window.Asteroid = Asteroid;
window.ast2 = ast2;
window.game1 = game1;


// listener for DOMContentLoaded
window.addEventListener('DOMContentLoaded', function(event) {
  // DOM: check if page is loaded
  console.log('DOM IS HERE!')
  const canvas = document.getElementById("game-canvas"); // 
  // canvas.width = 500;
  // canvas.height = 500;
  const ctx = canvas.getContext("2d");
  window.ctx = ctx // For testing purposes ONLY. REMOVE LATER
  // ctx we draw stuff
  
  mo.draw(ctx);
  ast.draw(ctx);
  ast2.draw(ctx);

});


console.log(mo)