import React from 'react';
import AuthApiService from '../services/AuthApiService';


const HeaderContext = React.createContext({
  setAuthToken: () => {}
})


export default HeaderContext;

export class HeaderProvider extends React.Component {


  state = {
    authToken: AuthApiService.getAuthToken()
  }

  setAuthToken = authToken => {
    this.setState({
      authToken
    })
  }


  render(){
    const value = {
      authToken: this.state.authToken,
      setAuthToken: this.setAuthToken,
    }
    return (
      <HeaderContext.Provider value={value}>
        {this.props.children}
      </HeaderContext.Provider>
    )
  }
}

