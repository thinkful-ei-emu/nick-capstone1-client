import React from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import './SignupPage.css'

class SignupPage extends React.Component {

static defaultProps = {
  history: {
    push: () => {}, 
  }
}

handleRegistrationSuccess = () => {
  const { history } = this.props;
  history.push('/login')
}




render(){
  return (
    <>
    <h1 className='lp-header'>BandBridge</h1>
    <div className='reg-form-container'>
      <RegistrationForm
        onRegistrationSuccess={this.handleRegistrationSuccess} />
    </div>
    </>
  )
}
  
}

export default SignupPage;