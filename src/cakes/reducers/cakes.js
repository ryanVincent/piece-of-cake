import * as constants from '../constants';
import uuid from 'uuid';

export default function cakes(state = [], action) {
  switch (action.type) {
    case constants.RECEIVED_CAKES :
      return receivedCakes(action);
    case constants.NEW_CAKE :
      return newCake(state, action);
    case constants.UPDATE_CAKE :
      return updateCake(state, action);
    default :
      return state;
  }
}

function receivedCakes(action) {
  return action.cakes;
}

function newCake(cakes, action) {
  let newCake = action.cake;
  newCake.id = uuid();

  return [...cakes, newCake];
}

function updateCake(cakes, action) {
  let updatedCake = action.cake;

  return cakes.map(cake => {
    return cake.id === updatedCake.id ? updatedCake : cake;
  });
}
