import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class CakeForm extends Component {
    constructor(props) {
        super(props);

        this.handleSaveClick = this.handleSaveClick.bind(this);
    }

    handleSaveClick() {
      let form = document.forms.cakeForm;
      let { cake } = this.props;

      let newCake = {
        title: form.title.value,
        desc: form.desc.value,
        image: form.url.value,
        id: cake.id
      };
      this.props.onSave(newCake);
    }

    render() {
        let { cake, onCancel } = this.props;



        return (
          <form name="cakeForm">
            <div className="field">
              <TextField floatingLabelText="Title" defaultValue={cake.title} name="title" />
            </div>
            <div className="field">
              <TextField multiLine={true} rows={2} rowsMax={4} floatingLabelText="Description" defaultValue={cake.desc}  name="desc" />
            </div>
            <div className="field">
              <TextField floatingLabelText="Image URL" defaultValue={cake.image} name="url" />
            </div>
            <FlatButton label="cancel" onTouchTap={onCancel} />
            <FlatButton label="save" onTouchTap={this.handleSaveClick} primary/>

          </form>
        );
    }
}

CakeForm.propTypes = {

};

CakeForm.defaultProps = {
  cake: {
    name: '',
    desc: '',
    url: '',
    id: null
  }
}

export default CakeForm;
