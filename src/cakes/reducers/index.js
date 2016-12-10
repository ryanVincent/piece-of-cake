import * as constants from '../constants';

export default function cakes(state, action) {
  switch (action.type) {
    case constants.RECEIVED_CAKES :
      return {
        cakes: receivedCakes(action)
      }
    default :
      return state;
  }
}

function receivedCakes(action) {
  return action.cakes;
}
