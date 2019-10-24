import React from "react";
import ReactDOM from "react-dom";
import * as Minesweeper from "../minesweeper"; // We need objects from here soon! 
import Tile from "./tile";


class Board extends React.Component{
    constructor(props){
        super(props);
        // debugger
        this.state = {
            board: this.props.testBoard.board,
            updateGame: this.props.testBoard.updateGame
            // updateGame is usable if needed
        };
    }



  render() {

    //   console.log(this.state.board.grid);
      const currentBoard = this.state.board
    //   console.log(this.state);
    return( 
        <div>
            board.jsx here
            {
                currentBoard.grid.map( (row, idx) => {
                    return row.map ( (tile,idx2) => {
                        let key = [idx,idx2];
                        < Tile testTile={{ key: key, updateGame: this.state.updateGame }} />
                        // console.log(this.state.updateGame);
                        // Key and updateGame both exist
                        // let testTile = { key: key, updateGame: this.state.updateGame}
                        // console.log(testTile);
                        // <div>
                        //     < Tile testTile = {{key: key, updateGame: this.state.updateGame}}/>
                        //     < Tile testTile = {{key: "key", updateGame: "this.state.updateGame"}}/>
                        // </div>
                    })
                })
            }
        </div>
    )
  }
}

export default Board;