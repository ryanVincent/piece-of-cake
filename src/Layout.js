import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import AppBar from 'material-ui/AppBar';

export default function Layout({ children }) {
  return (
    <MuiThemeProvider>
      <div className="App">
        <AppBar title="Piece of Cake"></AppBar>
        <div className = "container">
          {children}
        </div>
      </div>
    </MuiThemeProvider>)
}
