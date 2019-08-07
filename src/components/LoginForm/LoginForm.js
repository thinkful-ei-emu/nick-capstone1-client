import React from 'react';
import AuthApiService from '../../services/AuthApiService';



class LoginForm extends React.Component {

  static defaultProps = {
    onLoginSucces: () => {}
  }

  state = {error: null}

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    console.log('ran');
    this.setState({error: null});
    const {user_name, password} = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
    .then(res => {
      user_name.value = '';
      password.value = '';
      this.props.onLoginSuccess();
    })
    .catch(res => {
      this.setState({error: res.error})
    })
  }


  render(){

    const {error} = this.state;
    return (
      <form className='LoginForm' onSubmit={this.handleSubmitJwtAuth}>
        <div role='alert'>
          {error && <p style={{color: 'red'}}>{error}</p>}
        </div>       
        <div className='user_name'>
          <label htmlFor='login-user'>User name: </label>
          <input className='input' type='text' name='user_name' id='login-user' required/>
        </div>
        <div className='password'>
          <label htmlFor='login-password'>Password: </label>
          <input className='input' type='password' name='password' id='login-password' required/>
        </div>
        <button type='submit'>Login</button>
      </form>
    )
  }
}

export default LoginForm;