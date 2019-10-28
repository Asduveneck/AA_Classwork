import {RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions'

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      // let newState = Object.assign({}, state); // old way b4 object normalization curation

      return action.pokemon
    default: 
      return state;
  }
}

export default pokemonReducer