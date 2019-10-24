import React from "react";
import ReactDOM from "react-dom";
import Board from "./board";
import Tile from "./tile";

import * as Minesweeper from "../minesweeper";

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            board: new Minesweeper.Board(10,9)
        };
        this.updateGame = this.updateGame.bind(this);

    }
    updateGame(){
        return "updateGame method";
    }



    render(){

        return(
            //Stub out a second function, updateGame, but don't write anything here yet. We'll return to this after we have a properly rendering board. Then, write a render method. Have it return a new React component, Board, passing in this.state.board and this.updateGame as props. The Board component will pass the updateGame function to each individual tile: ultimately, this is how we'll make sure that the board re-renders when the state of the game changes.
            <div>put dispenser here react_minesweeper
                <br/>

                {<Board testBoard={{board: this.state.board, updateGame: this.updateGame}} />}

                <br/>
                { <Tile  /> }
                 {/* no props passed in so blank above */}
            </div>
        );
    }
}
export default Game;

