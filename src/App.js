import React, { Component } from 'react';
import './App.css';
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
