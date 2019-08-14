import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header/Header';
import {MemoryRouter} from 'react-router';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<MemoryRouter><Header /></MemoryRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders UI as expected', () => {
  const tree = renderer
      .create(<MemoryRouter><Header /></MemoryRouter>)
      .toJSON();
      expect(tree).toMatchSnapshot();
})