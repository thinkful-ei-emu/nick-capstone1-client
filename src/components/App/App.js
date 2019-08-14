import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../../Utils/PrivateRoute';
import PublicOnlyRoute from '../../Utils/PublicOnlyRoute';
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
        
          
        
        <Switch>
          <PublicOnlyRoute 
          exact path={'/'}
          component={LandingPage}
          />
          <Route
          exact path={'/posts'}
          component={PostListPage}
          />
          <PublicOnlyRoute
          exact path={'/login'}
          component={LoginPage}
          />
          <PublicOnlyRoute
          exact path={'/signup'}
          component={SignupPage}
          />
          <PrivateRoute
            exact path={'/postform'}
            component={PostFormPage}
          />
          <PrivateRoute
            path={'/posts/:postId'}
            component={PostPage}
            />
        </Switch>
      </div>
    );
  }
}

export default App;
