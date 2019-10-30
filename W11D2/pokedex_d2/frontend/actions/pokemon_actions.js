export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKE = 'RECEIVE_POKE';

import * as APIutil from "../util/api_util";

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});
export const receivePoke = (poke) => ({
  type: RECEIVE_POKE,
  poke
});

export const requestAllPokemon = () => (dispatch) => (
  APIutil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);


export const requestSinglePokemon = (id) => (dispatch) => (
  APIutil.fetchPoke(id)
    .then(poke => dispatch(receivePoke(poke)))
);


