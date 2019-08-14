import React from 'react';
import ReactDOM from 'react-dom';
import SignupPage from '../routes/SignupPage/SignupPage';
import renderer from 'react-test-renderer';





it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<SignupPage />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders UI as expected', () => {
  const tree = renderer
      .create(<SignupPage />)
      .toJSON();
      expect(tree).toMatchSnapshot();
})