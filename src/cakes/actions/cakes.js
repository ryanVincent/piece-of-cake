import * as constants from '../constants';
import * as api from '../api';

export function fetchCakes() {
  return dispatch => {
    console.log("in here")
    api.getCakes()
      .then((cakes) => {
        dispatch(receivedCakes(cakes));
      })
  }
}

function receivedCakes(cakes) {
  return {
    type: constants.RECEIVED_CAKES,
    cakes
  }
}
