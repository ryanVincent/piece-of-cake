import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { CakeContainer, mapStateToProps } from '../../../cakes/CakeContainer';

describe('CakeContainer', () => {

  it('renders without crashing', () => {

    const div = document.createElement('div');
    const cakes = [];
    ReactDOM.render(<MuiThemeProvider><CakeContainer cakes={cakes} /></MuiThemeProvider>, div);
  });
});

describe('cake filtering', () => {
  it('should filter cakes by title', () => {
    const state = {
      cakes: [
        {
          id: '000',
          title: 'Victoria cake',
          desc: 'a fragrant cake',
          url: 'google.co.uk/images/jasmin_cake.png'
        },
        {
          id: '001',
          title: 'Banana cake',
          desc: 'a cake for donkey kong',
          url: 'google.co.uk/images/banana_cake.png'
        }
      ],
      searchTerm: 'victoria'
    };

    const result = mapStateToProps(state);

    expect(result.cakes.length).toEqual(1);
    expect(result.cakes[0]).toEqual({
      id: '000',
      title: 'Victoria cake',
      desc: 'a fragrant cake',
      url: 'google.co.uk/images/jasmin_cake.png'
    });

  });

  it('should filter cakes by description', () => {
    const state = {
      cakes: [
        {
          id: '000',
          title: 'Victoria cake',
          desc: 'a fragrant cake',
          url: 'google.co.uk/images/jasmin_cake.png'
        },
        {
          id: '001',
          title: 'Banana cake',
          desc: 'a cake for donkey kong',
          url: 'google.co.uk/images/banana_cake.png'
        }
      ],
      searchTerm: 'donkey'
    };

    const result = mapStateToProps(state);

    expect(result.cakes.length).toEqual(1);
    expect(result.cakes[0]).toEqual({
      id: '001',
      title: 'Banana cake',
      desc: 'a cake for donkey kong',
      url: 'google.co.uk/images/banana_cake.png'
    });
  })
});
