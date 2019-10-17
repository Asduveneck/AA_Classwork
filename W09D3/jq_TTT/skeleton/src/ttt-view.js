class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  /*

When a user clicks on a cell, call Game.prototype.playMove to register their move.
  */
  bindEvents() {
    let that = this;
    $(this.$el).on("click", "li", function(event) {
      event.preventDefault();
      that.target = event.target;


      // alert(that.target.id); // this works with line 40 
      // alert(pos); // id is not an array
      let pos = $(that.target).data().pos;
      try {
        that.game.playMove(pos);
      }
      catch(err) {
        // alert(that.game.MoveError("Invalid Move"));
        window.alert("Invalid Move");
      }
      const $square = $(that.target);
      that.makeMove($square);
    });
  }

  makeMove($square) {
    /*
    . Manipulate the cell <li> to show the current player's mark. Add/remove CSS classes to change the cell background to white and display the 'X's and 'O's in different colors.

    Square will be an instance of something. jQuery object. Not just the pos, but probably the whole thing we just 
    */
    let player = this.game.currentPlayer;
    $square.text(player);
    // $square.addClass(player); // to customize later on
    $square.addClass("occupied");

    if (this.game.isOver()) {
      // render message below.. . .text()
      let $h2 = $(".banana");

      $h2.text("test");
      // turn off the listener. 
      this.$el.off("click");
    }
  }

  setupBoard() {
    const $ul = $("<ul>");
    this.$el.append($ul);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
      const $li = $("<li>").data("pos", [i, j]);
      // add the current player move to the list element here 
      // maybe add an id? probably unnecessary
      // const $li = $("<li>").attr("id", `${i}${j}`);
      // const $li = $("<li>").attr("pos", [i, j], "id", i + j);
      $ul.append($li);
    }
  }
  }
}

module.exports = View;


/*

remainder:    1   2   0       divisor:         

              1   2   3       0, 0, 1
              4   5   6       1, 1, 2
              7   8   9       2, 2, 3

*/
