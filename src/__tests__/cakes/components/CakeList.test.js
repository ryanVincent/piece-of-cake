import React from 'react';
import renderer from 'react-test-renderer';
import CakeList from '../../../cakes/components/CakeList';
import CakeItem from '../../../cakes/components/CakeItem';

import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow  } from 'enzyme';

describe('CakeList', () => {

  it('renders without crashing', () => {

    const div = document.createElement('div');
    const cakes = [];
    ReactDOM.render(<CakeList cakes={cakes}/>, div);
  });

  it('renders the correct number of cakes', () => {
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

    const wrapper = shallow(<CakeList cakes={cakes} />)
    expect(wrapper.find(CakeItem).length).toEqual(2);
  });
});