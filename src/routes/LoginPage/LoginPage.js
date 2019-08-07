import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'


class LoginPage extends React.Component {
   static defaultProps = {
     history: {
       push: () => {},
     },
   }

   handleLoginSuccess = () => {
     const { history } = this.props;
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