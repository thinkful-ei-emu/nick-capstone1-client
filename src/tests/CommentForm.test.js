import React from 'react';
import ReactDOM from 'react-dom';
import CommentForm from '../components/CommentForm/CommentForm';
import renderer from 'react-test-renderer';



it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<CommentForm />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders UI as expected', () => {
  const tree = renderer
      .create(<CommentForm />)
      .toJSON();
      expect(tree).toMatchSnapshot();
})