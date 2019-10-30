import {RECEIVE_ALL_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions'

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      // let newState = Object.assign({}, state); // old way b4 object normalization curation

      return action.pokemon;
    case RECEIVE_POKE:
      let newState = Object.assign({}, action.poke);
      delete newState.items;
      return newState;
    default: 
      return state;
  }
}

export default pokemonReducer