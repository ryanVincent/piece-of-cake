import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow, mount  } from 'enzyme';
import CakeForm from '../../../cakes/components/CakeForm';

describe('CakeForm', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MuiThemeProvider><CakeForm /></MuiThemeProvider>, div);
  });

  it('should populate fields when provided with a cake object', () => {
    const cake = {
      "title": "Lemon cheesecake",
      "desc": "A cheesecake made of lemon",
      "image": "https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/lemoncheesecake_lg.jpg"
    };

    const wrapper = shallow(<CakeForm cake={cake} />);

    const titleInput = wrapper.find({ name: 'title' });
    expect(titleInput.props().defaultValue).toEqual("Lemon cheesecake");

    const descInput = wrapper.find({ name: 'desc' });
    expect(descInput.props().defaultValue).toEqual("A cheesecake made of lemon");

    const urlInput = wrapper.find({ name: 'url' });
    expect(urlInput.props().defaultValue).toEqual("https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/lemoncheesecake_lg.jpg");
  });

  it('should call onCancel prop when cancel is clicked', () => {
    const onCancelMock = jest.fn();
    const wrapper = shallow(<CakeForm onCancel={onCancelMock} />);
    const cancelButton = wrapper.find({ label: 'cancel'});
    cancelButton.simulate('touchTap');
    expect(onCancelMock.mock.calls.length).toEqual(1);
  });

});
