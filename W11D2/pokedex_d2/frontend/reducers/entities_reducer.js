import pokemonReducer from "./pokemon_reducer";
import itemsReducer from './items_reducer';
import uiReducer from './ui_reducer';
import { combineReducers} from 'redux';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,//,
  items: itemsReducer
  // ui: uiReducer
});

export default entitiesReducer;