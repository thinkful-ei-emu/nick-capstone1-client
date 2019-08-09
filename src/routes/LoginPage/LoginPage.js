import React from 'react';
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
      <section className='LoginPage'>
      <h1>Login</h1>
        <LoginForm 
        onLoginSuccess={this.handleLoginSuccess}
        />
        </section>
    )
  }  
}

export default LoginPage;