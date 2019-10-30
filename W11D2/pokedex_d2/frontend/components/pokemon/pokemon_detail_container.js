import { connect } from "react-redux";
import React from "react";
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail'; // to make later
import itemsReducer from "../../reducers/items_reducer";


const mapStateToProps = (state, ownProps) => {
  return { 
  poke: state.entities.pokemon[ownProps.match.params.id],
  items: state.entities.items
}};

const mapDispatchToProps = (dispatch, ownProps) => ({ 
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);