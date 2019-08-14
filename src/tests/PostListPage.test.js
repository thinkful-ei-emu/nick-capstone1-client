import React from 'react';
import ReactDOM from 'react-dom';
import PostListPage from '../routes/PostListPage/PostListPage';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';



it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<MemoryRouter><PostListPage /></MemoryRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders UI as expected', () => {
  const tree = renderer
      .create(<MemoryRouter><PostListPage /></MemoryRouter>)
      .toJSON();
      expect(tree).toMatchSnapshot();
})