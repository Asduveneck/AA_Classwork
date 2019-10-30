import React from "react";
import  PokemonIndexItem  from "./pokemon_index_item";
import { Route } from "react-router-dom";
import PokemonDetailContainer from './pokemon_detail_container';
export default class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.requestAllPokemon();
  }
  render() {
    // <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
    return(
      <div className= "pokedex">
        <ul>
         {this.props.pokemon.map((poke) =>{
          //  return <li key={poke.id}>{poke.name} <img src={poke.image_url} alt={poke.name} height="69" width="69"/></li> //nice
          
           return <PokemonIndexItem name={poke.name} image_url={poke.image_url} id = {poke.id} key = {poke.id}  />
         })}
        </ul>
      </div>
    );
  }
}