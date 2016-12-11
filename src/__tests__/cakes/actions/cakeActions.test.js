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

  it('should create RECEIVED_CAKES action when fetching cakes completes', () => {
    const middlewares = [ thunk ];
    const mockStore = configureMockStore(middlewares);

    const cakes = [
      {
        "title": "Lemon cheesecake",
        "desc": "A cheesecake made of lemon",
        "image": "https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/lemoncheesecake_lg.jpg"
      },
      {
        "title": "victoria sponge",
        "desc": "sponge with jam",
        "image": "http://www.bbcgoodfood.com/sites/bbcgoodfood.com/files/recipe_images/recipe-image-legacy-id--1001468_10.jpg"
      }
    ];

    nock('http://localhost:3000')
      .get('/cake.json')
      .reply(200, { body: cakes});

    const store = mockStore({cakes: []});

    return store.dispatch(actions.fetchCakes())
      .then(() => {
        const actualActions = store.getActions();
        expect(actualActions.length).toEqual(1);
        expect(actualActions[0].type).toEqual(constants.RECEIVED_CAKES);
        expect(actualActions[0].cakes.length).toEqual(2);
      });
  });

})
