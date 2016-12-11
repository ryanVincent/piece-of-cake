import * as actions from '../../../cakes/actions/cakes';
import * as constants from '../../../cakes/constants';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

describe('cake action creators', () => {
  it('should create an action to add a new cake', () => {
    const cake = {
      id: '000',
      name: 'Jasmine cake',
      description: 'a fragrant cake',
      url: 'google.co.uk/images/jasmin_cake.png'
    };

    const expectedAction = {
      type: constants.NEW_CAKE,
      cake
    };

    expect(actions.newCake(cake)).toEqual(expectedAction);
  });

  it('should create an action to update an existing cake', () => {
    const cake = {
      id: '000',
      name: 'Jasmine cake',
      description: 'a fragrant cake',
      url: 'google.co.uk/images/jasmin_cake.png'
    };

    const expectedAction = {
      type: constants.UPDATE_CAKE,
      cake
    };

    expect(actions.updateCake(cake)).toEqual(expectedAction);
  });
})
