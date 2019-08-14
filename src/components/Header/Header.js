import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/TokenService';
import HeaderContext from '../../contexts/HeaderContext';
import './Header.css'


class Header extends React.Component{
  

  static contextType = HeaderContext;

  
  
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.context.setAuthToken(TokenService.getAuthToken())
  }

  renderUserName = () => {
    if(this.context.authToken){
      return <h3 className='user-name'>{TokenService.getUserName()}</h3>
    }
    else {
      return <h3 className='user-name'>Guest</h3>
    }
  }

  renderLogoutLink() {

    return (
      <div className='header-login'>
       {this.renderUserName()}
        <Link to='/' onClick={this.handleLogoutClick}><button className='login-button'>Logout</button></Link>
      </div>
      )
  }

  renderLoginLink(){

  return  (
      <div className='header-login'>
       {this.renderUserName()}
        <Link to='/login'><button className='login-button'>Login</button></Link>
        {'  '}
        <Link to='signup'><button className='login-button'>Sign up</button></Link>
      </div>
    )
  }


  render(){
    return (
      <>
      <Link to={'/posts'}>
        <h1 className='title-header'>BandBridge</h1>
        </Link>
      <header className='app-header'>
        {this.context.authToken
        ? this.renderLogoutLink()
        : this.renderLoginLink()}
      </header>
      </>
    )
  }


}

export default Header;

