import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CakeItem from '../../../cakes/components/CakeItem';

it('renders without crashing', () => {

  const div = document.createElement('div');
  const cake = {};
  ReactDOM.render(<MuiThemeProvider><CakeItem cake={cake}/></MuiThemeProvider>, div);
});
