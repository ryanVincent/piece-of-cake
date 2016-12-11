import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
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

    const actions = [
      <FlatButton label="Cancel" onTouchTap={this.handleCloseClick} />,
      <FlatButton primary={true} label="Save" onTouchTap={this.handleSaveClick} />
    ];

    return (
      <div>
        <Card>
          <CardMedia style={style.cardMedia}>
            <img src={cake.image} />
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
