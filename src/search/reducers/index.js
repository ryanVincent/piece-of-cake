import { UPDATE_SEARCH_TERM } from '../constants';

export default function searchTerm(state = '', action) {
  switch(action.type) {
    case UPDATE_SEARCH_TERM:
      return action.searchTerm;
  }
  return state;
}