import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { PostProvider } from './contexts/PostContext';
import { PostListProvider } from './contexts/PostListContext';
import {HeaderProvider} from './contexts/HeaderContext';
import App from './components/App/App';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faArrowAltCircleDown, faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons';

library.add(faArrowAltCircleDown, faArrowAltCircleUp);


ReactDOM.render(
    <BrowserRouter>
      <PostListProvider>
        <PostProvider>
          <HeaderProvider>
          <App />
          </HeaderProvider>
        </PostProvider>
      </PostListProvider>
    </BrowserRouter>
  , 
  document.getElementById('root'));


