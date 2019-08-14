import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from '../routes/LandingPage/LandingPage';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';




it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<MemoryRouter><LandingPage /></MemoryRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders UI as expected', () => {
  const tree = renderer
      .create(<MemoryRouter><LandingPage /></MemoryRouter>)
      .toJSON();
      expect(tree).toMatchSnapshot();
})