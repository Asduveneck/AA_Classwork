import React from "react";

export default class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.requestAllPokemon();
  }
  render() {
    return(
      <div className= "pokedex">
        <ul>
         {this.props.pokemon.map((poke) =>{
           return <li key={poke.id}>{poke.name} <img src={poke.image_url} alt={poke.name} height="69" width="69"/></li> //nice
         })}
        </ul>
      </div>
    );
  }
}