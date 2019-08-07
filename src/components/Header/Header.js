import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/TokenService';
import HeaderContext from '../../contexts/HeaderContext';


class Header extends React.Component{
  

  static contextType = HeaderContext;
 
  
  handleLogoutClick = () => {
    console.log('context', this.context)
    // this.context.setAuthToken(null)
    TokenService.clearAuthToken();
   
  }

  renderLogoutLink() {

    return (
      <div>
        <h1 className='title-header'>BandBridge</h1>
        <Link to='/' onClick={this.handleLogoutClick}>Logout</Link>
      </div>
      )
  }

  renderLoginLink(){
  return  (
      <div>
        <h1 className='title-header'>BandBridge</h1>
        <Link to='/login'>Login</Link>
        {'  '}
        <Link to='signup'>Sign up!</Link>
      </div>
    )
  }


  render(){
    return (
      <header>
        {TokenService.hasAuthToken()
        ? this.renderLogoutLink()
        : this.renderLoginLink()}
      </header>
    )
  }


}

export default Header;

