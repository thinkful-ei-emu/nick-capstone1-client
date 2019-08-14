import React from 'react';
import ReactDOM from 'react-dom';
import PostForm from '../components/PostForm/PostForm';
import renderer from 'react-test-renderer';



it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<PostForm />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders UI as expected', () => {
  const tree = renderer
      .create(<PostForm />)
      .toJSON();
      expect(tree).toMatchSnapshot();
})