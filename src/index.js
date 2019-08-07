import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { PostProvider } from './contexts/PostContext';
import { PostListProvider } from './contexts/PostListContext';
import App from './components/App/App';


ReactDOM.render(
    <BrowserRouter>
      <PostListProvider>
        <PostProvider>
          <App />
        </PostProvider>
      </PostListProvider>
    </BrowserRouter>
  , 
  document.getElementById('root'));


