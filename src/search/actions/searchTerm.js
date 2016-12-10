import { UPDATE_SEARCH_TERM } from '../constants';

export function updateSearchTerm(searchTerm) {
  return {
    type: UPDATE_SEARCH_TERM,
    searchTerm
  }
}
