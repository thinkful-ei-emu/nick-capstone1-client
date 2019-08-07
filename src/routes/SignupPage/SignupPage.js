import React from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

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
    <div>
      <RegistrationForm
        onRegistrationSuccess={this.handleRegistrationSuccess} />
    </div>
  )
}
  
}

export default SignupPage;