import CakeList from './components/CakeList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CakeActions from './actions/cakes';
import * as SearchTermActions from './actions/searchTerm';

import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import CakeForm from './components/CakeForm';

export class CakeContainer extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleNewCakeClick = this.handleNewCakeClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleSaveCakeClick = this.handleSaveCakeClick.bind(this);

    this.state = {
      newCakeModalOpen : false
    }
  }

  handleChange(event) {
    this.props.updateSearchTerm(event.target.value);
  }

  handleNewCakeClick() {
    this.setState({
      newCakeModalOpen: true
    });
  }

  handleCloseClick() {
    this.setState({
      open: false
    });
  }

  handleSaveClick(cake) {
    this.props.newCake(cake);
    this.setState({
      newCakeModalOpen: false
    });
  }

  handleSaveCakeClick(cake) {
    this.props.updateCake(cake);
  }

  render() {
    return (
      <div>
        <input type="search" placeholder="Victoria Sponge" onChange={this.handleChange} />
        <CakeList cakes={this.props.cakes} onSaveCakeClick={this.handleSaveCakeClick} />
        <FloatingActionButton className='primary-action-button' onTouchTap={this.handleNewCakeClick}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog title="New Cake" modal={true} open={this.state.newCakeModalOpen} >
          <CakeForm onCancel={this.handleCloseClick} onSave={this.handleSaveClick} />
        </Dialog>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      cakes: state.cakes.filter(cake => cake.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...CakeActions,
        ...SearchTermActions
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
