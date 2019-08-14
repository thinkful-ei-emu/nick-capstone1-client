import React from 'react';
import ReactDOM from 'react-dom';
import PostPage from '../routes/PostPage/PostPage';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';




it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<MemoryRouter><PostPage /></MemoryRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders UI as expected', () => {
  const tree = renderer
      .create(<MemoryRouter><PostPage /></MemoryRouter>)
      .toJSON();
      expect(tree).toMatchSnapshot();
})