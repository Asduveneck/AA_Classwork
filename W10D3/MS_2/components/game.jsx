import React from "react";
import ReactDOM from "react-dom";
import Board from "./board";
import * as Minesweeper from "../minesweeper";

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            board: new Minesweeper.Board(10,9)
        };
        this.updateGame = this.updateGame.bind(this);
        this._board = this._board.bind(this);
        this._tile = this._tile.bind(this);
    }
    updateGame(){
        return "updateGame method";
    }

    _board(prop1, prop2) {
        // console.log(`prop1: ${prop1} prop2: ${prop2}`);
        console.log(prop1.grid[0]);
        return(
            <div className="top-grid">
                {prop1.grid.map((row, idx) => {
                    // row.map((tile)=>{
                    //     return this._tile();
                    // });
                    return this._tile();
                })}
            </div>
        )
        // debugger
    }

    _tile(){
        return "T";
    }

    render(){

        return(
            //Stub out a second function, updateGame, but don't write anything here yet. We'll return to this after we have a properly rendering board. Then, write a render method. Have it return a new React component, Board, passing in this.state.board and this.updateGame as props. The Board component will pass the updateGame function to each individual tile: ultimately, this is how we'll make sure that the board re-renders when the state of the game changes.
            <div>put dispenser here react_minesweeper
                <br/>

                {this._board(this.state.board, this.updateGame())}
                <br/>
                {this._tile()}
            </div>
        );
    }
}
export default Game;

