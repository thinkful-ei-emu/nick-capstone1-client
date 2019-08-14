import React from 'react';
import ReactDOM from 'react-dom';
import PostListItem from '../components/PostListItem/PostListItem';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';




const dummyPost = {
  id: 1,
  style: 'Rock',
  location: 'Atlanta (GA)',
  instruments_need: 'Drums Piano',
  commitment: 'Low(1-3)',
  skill_lvl: 'Hobbyist',
  description: 'hello'
}

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<MemoryRouter><PostListItem post={dummyPost} index={1} /></MemoryRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders UI as expected', () => {
  const tree = renderer
      .create(<MemoryRouter><PostListItem post={dummyPost} index={1}/></MemoryRouter>)
      .toJSON();
      expect(tree).toMatchSnapshot();
})