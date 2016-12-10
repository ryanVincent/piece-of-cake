import CakeList from './components/CakeList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CakeActions from './actions/cakes';
import * as SearchTermActions from './actions/searchTerm';

import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export class CakeContainer extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.updateSearchTerm(event.target.value);
  }

  render() {
    return (
      <div>
        <input type="search" placeholder="Victoria Sponge" onChange={this.handleChange} />
        <CakeList cakes={this.props.cakes} />
        <FloatingActionButton className='primary-action-button'>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      cakes: state.cakes.filter(cake => cake.title.includes(state.searchTerm))
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...CakeActions,
        ...SearchTermActions
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
