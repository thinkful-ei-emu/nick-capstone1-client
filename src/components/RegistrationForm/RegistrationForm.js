import React from 'react';
import Lists from '../../Utils/Lists';
import AuthApiService from '../../services/AuthApiService';

class RegistrationForm extends React.Component {

  handleSubmit = (ev) => {
    ev.preventDefault();
    const {user_name, password, location, instrument, styles, commitment} = ev.target;
    
    
    console.log(styles.value)

    this.setState({error: null});
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      location: location.value,
      instrument: instrument.value,
      styles: styles.value,
      commitment: commitment.value,
    })
    .then(() => {
      user_name.value = ''
      password.value = ''
      this.props.onRegistrationSuccess()
    })
    .catch(res => {
      this.setState({error: res.error})
    })

  }

  handleInputOptions = inputs => {
      return inputs.map((input, key )=> <option key={key}value={input}>{input}</option>)
  }

  render() {
    let instruments = this.handleInputOptions(Lists.instrumentOptions);
    let locations = this.handleInputOptions(Lists.locationOptions);
    let styles = this.handleInputOptions(Lists.styles.sort());
    let commitment = this.handleInputOptions(Lists.commitment);
    return (
      <form className='registraion-form' onSubmit={this.handleSubmit}>
        <div className='reg-form-row'>
          <label htmlFor='user_name'>Username: </label>
          <input name='user_name' id='user_name' type='text' required />
        </div>
        <div className='reg-form-row'>
          <label htmlFor='password'>Password: </label>
          <input name='password' id='password' type='password' required />
        </div>
        <div className='reg-form-row'>
          <label htmlFor='location'>Location: </label>
          <select name='location' id='location' required>
          {locations} 
          </select>
        </div>
        <div className='reg-form-row'>
          <label htmlFor='instrument'>Instrument: </label>
          <select name='instrument' id='instrument' required>
          {instruments} 
          </select>
        </div>
        <div className='reg-form-row'>
          <label htmlFor='styles'>Styles (Genres): </label>
          <select name='styles' className='reg-form-multi' id='styles' multiple size='5' required>
            {styles}
          </select>
        </div>
        <div className='reg-form-row'>
          <label htmlFor='commitment'>Hours Per Week (Availability): </label>
          <select name='commitment' id='commitment' required>
            {commitment}
          </select>
        </div>
        <button type='submit' className='reg-form-button'>Register</button>
      </form>
    )
  }
}

export default RegistrationForm;

