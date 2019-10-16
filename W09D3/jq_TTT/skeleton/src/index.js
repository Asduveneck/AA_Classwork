const View = require('./ttt-view.js'); // require appropriate file
const Game = require('../../solution/game.js'); // require appropriate file
  

  $(() => {
    // Your code here for jQuery
    let container = $(".ttt");
    const game = new Game();
    const view = new View(game, container);


  });
