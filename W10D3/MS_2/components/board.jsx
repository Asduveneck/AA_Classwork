import React from "react";
import ReactDOM from "react-dom";
import * as Minesweeper from "../minesweeper"; // We need objects from here soon! 

class Board extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            board: props.board
            // updateGame is usable if needed
        };
    }

  render() {
    return( 
        <div>
            board.jsx here
            {
                this.props.testnum
            }
        </div>
    )
  }
}

export default Board;