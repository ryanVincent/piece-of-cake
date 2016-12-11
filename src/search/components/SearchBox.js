import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';

const style = {
  icon: {
    color: 'white',
    verticalAlign: 'middle',
    paddingRight: '10px'
  },
  textField: {
    color: 'white'
  },
  textFieldUnderlineFocus: {
    color: 'white',
    borderBottom: '3px solid white',
    borderColor: 'white'
  }
};

export default function SearchBox({onChange}) {
  return (
    <div className="search-box">
      <FontIcon style={style.icon} className='material-icons'>search</FontIcon><TextField underlineFocusStyle={style.textFieldUnderlineFocus} inputStyle={style.textField} hintText="Search" type="search" onChange={onChange} />
    </div>
  )
}

SearchBox.propTypes = {
  onChange: PropTypes.func
}
