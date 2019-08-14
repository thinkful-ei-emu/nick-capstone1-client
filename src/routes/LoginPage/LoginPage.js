import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'
import HeaderContext from '../../contexts/HeaderContext';


class LoginPage extends React.Component {
   static defaultProps = {
     history: {
       push: () => {},
     },
   }

   static contextType = HeaderContext

   handleLoginSuccess = (token) => {
     const { history } = this.props;
     this.context.setAuthToken(token)
     history.push('/posts')
   }

  render(){
    return (
      <>
      <Link to={'/posts'}>
        <h1 className='title-header'>BandBridge</h1>
        </Link>
      <section className='login-page'> 
      <h1 className='login-header'>Login</h1>
        <LoginForm 
        onLoginSuccess={this.handleLoginSuccess}
        />
        </section>
      </>
    )
  }  
}

export default LoginPage;