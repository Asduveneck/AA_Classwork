class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  /*

When a user clicks on a cell, call Game.prototype.playMove to register their move.
  */
  bindEvents() {
    $("<ul>").on("click", "li", function(event) {
      let clickedGrid = event.target;
      /* Simple test: add text to `li` upon click */
      
    });
  }

  makeMove($square) {

  }

  setupBoard() {
    let that = this;
    const $ul = $("<ul>");
    this.$el.append($ul);
    for (let i = 0; i < 9; i++) {
      const $li = $("<li>");
      $ul.append($li);
    }
  }
}

module.exports = View;
