import * as constants from '../constants';
import cakesReducer from './cakes';
import searchTermReducer from './searchTerm';
import { combineReducers } from 'redux';

let reducer = combineReducers({
  cakes: cakesReducer,
  searchTerm: searchTermReducer
});

export default reducer;
