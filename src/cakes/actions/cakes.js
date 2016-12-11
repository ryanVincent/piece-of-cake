import * as constants from '../constants';
import * as api from '../api';

export function fetchCakes() {
  return dispatch => {
    return api.getCakes()
      .then((cakes) => {
        dispatch(receivedCakes(cakes));
      })
  }
}

export function newCake(cake) {
  return {
    type: constants.NEW_CAKE,
    cake
  }
}

export function updateCake(cake) {
  return {
    type: constants.UPDATE_CAKE,
    cake
  }
}

function receivedCakes(cakes) {
  return {
    type: constants.RECEIVED_CAKES,
    cakes
  }
}
