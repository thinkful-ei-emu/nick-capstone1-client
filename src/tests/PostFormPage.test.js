import React from 'react';
import ReactDOM from 'react-dom';
import PostFormPage from '../routes/PostFormPage/PostFormPage';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<MemoryRouter><PostFormPage /></MemoryRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders UI as expected', () => {
  const tree = renderer
      .create(<MemoryRouter><PostFormPage /></MemoryRouter>)
      .toJSON();
      expect(tree).toMatchSnapshot();
})