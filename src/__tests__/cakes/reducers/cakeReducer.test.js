import cakeReducer from '../../../cakes/reducers';
import * as constants from '../../../cakes/constants';

describe('cake reducer', () => {

  it('should handle the RECEIVED_CAKES action', () => {
    const receivedCakes = [
      {
        id: '000',
        name: 'Jasmine cake',
        description: 'a fragrant cake',
        url: 'google.co.uk/images/jasmin_cake.png'
      },
      {
        id: '001',
        name: 'Banana cake',
        description: 'a cake for donkey kong',
        url: 'google.co.uk/images/banana_cake.png'
      }
    ];

    const initialState = [
      {
        id: '002',
        name: 'Rogue cake',
        description: 'a stray cake',
        url: 'google.co.uk/images/stray_cake.png'
      }
    ];

    const action = {
      type: constants.RECEIVED_CAKES,
      cakes: receivedCakes
    }

    const result = cakeReducer(initialState, action);

    expect(result.length).toEqual(2);
    expect(result).toEqual(receivedCakes);

  });

  it('should handle the UPDATE_CAKE action', () => {
    const initialState = [
      {
        id: '000',
        name: 'Jasmine cake',
        description: 'a fragrant cake',
        url: 'google.co.uk/images/jasmin_cake.png'
      },
      {
        id: '001',
        name: 'Banana cake',
        description: 'a cake for donkey kong',
        url: 'google.co.uk/images/banana_cake.png'
      }
    ];

    const updatedCake = {
      id: '000',
      name: 'Jasmine cake',
      description: 'a fragrant and slightly spicy cake',
      url: 'google.co.uk/images/jasmin_cake.png'
    };

    const action = {
      type: constants.UPDATE_CAKE,
      cake: updatedCake
    }

    const result = cakeReducer(initialState, action);

    expect(result[0]).toEqual(updatedCake);
    expect(result[1]).toEqual(initialState[1]);

  });

  it('should handle the NEW_CAKE action', () => {
    const cake = {
      id: '000',
      name: 'Jasmine cake',
      description: 'a fragrant cake',
      url: 'google.co.uk/images/jasmin_cake.png'
    }
    const expectedResult = [cake]
    const action = {
      type: constants.NEW_CAKE,
      cake
    };
    const result = cakeReducer([],action);
    expect(result).toEqual(expectedResult);
  })
});
