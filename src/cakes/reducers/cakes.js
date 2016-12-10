import * as constants from '../constants';

export default function cakes(state = [], action) {
  switch (action.type) {
    case constants.RECEIVED_CAKES :
      return receivedCakes(action);
    case constants.NEW_CAKE :
      return newCake(state, action);
    default :
      return state;
  }
}

function receivedCakes(action) {
  return action.cakes;
}

function newCake(cakes, action) {
  return [...cakes, action.cake];
}
