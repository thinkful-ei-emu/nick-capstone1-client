import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App/App';
import {MemoryRouter} from 'react-router';
import renderer from 'react-test-renderer';



it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders UI as expected', () => {
  const tree = renderer
      .create(<MemoryRouter><App /></MemoryRouter>)
      .toJSON();
      expect(tree).toMatchSnapshot();
})

