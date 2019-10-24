import React from "react";
import ReactDOM from "react-dom";
import * as Minesweeper from "../minesweeper";


class Tile extends React.Component{

    constructor(props){
        debugger
        super(props);
        this.state = {
            flagged: false,
            updateGame: "this.props.testTile.updateGame"
        };
    }



    render() {
        // console.log(this.props.banana);
        return(
            <div>
                {this.props.testTile}
            </div>
        );
    }
}



export default Tile;