import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/TokenService';
import HeaderContext from '../../contexts/HeaderContext';


class Header extends React.Component{
  

  static contextType = HeaderContext;

  
  
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.context.setAuthToken(TokenService.getAuthToken())

  }


  


  renderUserName = () => {
    if(this.context.authToken){
      return <h3>{TokenService.getUserName()}</h3>
    }
    else {
      return <h3>Guest</h3>
    }
  }

  renderLogoutLink() {

    return (
      <div>
        <Link to='/' onClick={this.handleLogoutClick}>Logout</Link>
      </div>
      )
  }

  renderLoginLink(){
  return  (
      <div>
        <Link to='/login'>Login</Link>
        {'  '}
        <Link to='signup'>Sign up!</Link>
      </div>
    )
  }


  render(){
    let userText = this.renderUserName();
    return (
      <header>
        <Link to={'/posts'}>
        <h1 className='title-header'>BandBridge</h1>
        </Link>
        {userText}
        {this.context.authToken
        ? this.renderLogoutLink()
        : this.renderLoginLink()}
      </header>
    )
  }


}

export default Header;

