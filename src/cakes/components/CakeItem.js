import React, { Component, PropTypes } from 'react';
import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import CakeForm from './CakeForm';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let style = {
  cardMedia: {
    borderBottom: '1px solid #efefef'
  },
  cardActions: {
    textAlign: 'right'
  },
  mediaStyle: {
    height: '336px',
    overflow: 'hidden'
  },
  img: {
    height: '100%',
    width: 'auto',
    maxWidth: 'auto',
    minWidth: 'auto'
  }
};

export default class CakeItem extends Component {

  constructor(props) {
    super(props);

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);


    this.state = {
      open: false
    };
  }

  handleEditClick() {
    this.setState({
      open: true
    });
  }

  handleCloseClick() {
    this.setState({
      open: false
    })
  }

  handleSaveClick(cake) {
    this.props.onSaveCakeClick(cake);
    this.setState({
      open: false
    });
  }

  render() {

    let { cake } = this.props;

    return (
      <div>
        <Card>
          <CardMedia mediaStyle={style.mediaStyle} style={style.cardMedia}>
            <img alt={cake.title} style={style.img} src={cake.image} />
          </CardMedia>
          <CardTitle title={cake.title} subtitle={cake.desc} />
          <CardActions style={style.cardActions}>
            <FlatButton label="Edit" onClick={this.handleEditClick} />
          </CardActions>
        </Card>
        <Dialog title="Edit Cake" modal={true} open={this.state.open} >
          <CakeForm cake={cake} onCancel={this.handleCloseClick} onSave={this.handleSaveClick} />
        </Dialog>
      </div>
    );
  }
}

CakeItem.propTypes = {
  onSaveCakeClick: PropTypes.func,
  cake: PropTypes.object
};
