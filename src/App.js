import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getCakes } from './cakes/api';
import { Button } from 'react-toolbox/lib/button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import CakeList from './cakes/components/CakeList';
import 'flexboxgrid/css/flexboxgrid.min.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cakes: []
    };
  }

  componentDidMount() {
    var self = this;
    //this.state.cakes = [];
    getCakes().then((cakes) => {
      console.log(cakes);
      self.setState({ cakes })
    })
  }

  render() {
    return (
      <MuiThemeProvider>
          <div className="App">
            <AppBar title="Piece of Cake"></AppBar>
            <div className = "container">
                <CakeList cakes={this.state.cakes} />
            </div>
          </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
