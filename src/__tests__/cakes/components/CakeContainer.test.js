import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { CakeContainer, matchesSearchTerm, mapStateToProps } from '../../../cakes/CakeContainer';

it('renders without crashing', () => {

  const div = document.createElement('div');
  const cakes = [];
  ReactDOM.render(<MuiThemeProvider><CakeContainer cakes={cakes} /></MuiThemeProvider>, div);
});
