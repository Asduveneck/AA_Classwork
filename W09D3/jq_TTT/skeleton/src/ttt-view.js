class View {
  constructor(game, $el) {
    this.game = game;
    this.grid = $el;
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    // this.grid = $('<ul>').html();
    const rowIdx = this.grid.find('.row').length; 
    const $row = $('<ul>').addClass('row'); //.addClass('.group');  // do we iuse both?
    for (let i = 0; i < 4; i++) {
      const square = $('<li>').addClass('square').attr('data-pos', [rowIdx, i]);

    };

  };
}

module.exports = View;
