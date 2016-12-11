import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import theme from './theme';
import SearchBox from './search/components/SearchBox';
import * as SearchTermActions from './search/actions/searchTerm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// let style = {
//   appBar: {
//     position: 'fixed',
//     top: 0
//   }
// };

export class Layout extends Component {

  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.props.updateSearchTerm(event.target.value);
  }

  render() {

    const search = <SearchBox onChange={this.handleSearch} />;

    return (
      <MuiThemeProvider muiTheme={theme}>
        <div className="App">
          <AppBar showMenuIconButton={false} className="app-bar" title={search} />
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

Layout.propTypes = {
  searchTerm: PropTypes.string,
  updateSearchTerm: PropTypes.func
};

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...SearchTermActions
    }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(Layout);
