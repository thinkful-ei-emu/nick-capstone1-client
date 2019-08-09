import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import LandingPage from '../../routes/LandingPage/LandingPage';
import SignupPage from '../../routes/SignupPage/SignupPage'
import PostListPage from '../../routes/PostListPage/PostListPage'
import LoginPage from '../../routes/LoginPage/LoginPage';
import PostFormPage from '../../routes/PostFormPage/PostFormPage';
import PostPage from '../../routes/PostPage/PostPage';
import './App.css';



class App extends React.Component {
  
  state = {
    hasError: false
  }
  


  render(){
    
    
    return (

      <div className="App">
        
          <Header />
        
        <Switch>
          <Route 
          exact path={'/'}
          component={LandingPage}
          />
          <Route
          exact path={'/posts'}
          component={PostListPage}
          />
          <Route
          exact path={'/login'}
          component={LoginPage}
          />
          <Route
          exact path={'/signup'}
          component={SignupPage}
          />
          <Route
            exact path={'/postform'}
            component={PostFormPage}
          />
          <Route
            path={'/posts/:postId'}
            component={PostPage}
            />
        </Switch>
      </div>
    );
  }
}

export default App;
