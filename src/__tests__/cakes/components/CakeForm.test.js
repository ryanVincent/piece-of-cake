import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CakeForm from '../../../cakes/components/CakeForm';

it('renders without crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(<MuiThemeProvider><CakeForm /></MuiThemeProvider>, div);
});
