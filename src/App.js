import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getCakes } from './cakes/api';

import 'flexboxgrid/css/flexboxgrid.min.css';
import Layout from './Layout';
import CakeContainer from './cakes/CakeContainer';

class App extends Component {

  render() {
    return (
      <Layout>
        <CakeContainer />
      </Layout>
    );
  }

}

export default App;
