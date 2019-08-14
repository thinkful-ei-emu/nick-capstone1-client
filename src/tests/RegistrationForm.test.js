import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import renderer from 'react-test-renderer';



it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<RegistrationForm />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders UI as expected', () => {
  const tree = renderer
      .create(<RegistrationForm />)
      .toJSON();
      expect(tree).toMatchSnapshot();
})