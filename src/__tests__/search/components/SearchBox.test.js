import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SearchBox from '../../../search/components/SearchBox';

it('renders without crashing', () => {

  const div = document.createElement('div');
  const cake = {};
  ReactDOM.render(<MuiThemeProvider><SearchBox /></MuiThemeProvider>, div);
});
