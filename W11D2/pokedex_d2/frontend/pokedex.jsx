// ENTRY FILE
import React from 'react';
import ReactDOM from 'react-dom';
import {RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon, 
  requestSinglePokemon, RECEIVE_POKE, receivePoke

} from './actions/pokemon_actions';
import * as APIutil from './util/api_util';
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom'; 




document.addEventListener("DOMContentLoaded", ()=>{
  const rootEl = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store = {store} />, rootEl);

  // REMOVE LATER
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.fetchAllPokemon = APIutil.fetchAllPokemon;
  // window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectAllPokemon = selectAllPokemon;
  window.fetchPoke = APIutil.fetchPoke;
  window.requestSinglePokemon = requestSinglePokemon;
  window.receivePoke = receivePoke;
})
