import React from 'react';
import TokenService from '../services/TokenService';


const HeaderContext = React.createContext({
  setAuthToken: () => {}
})


export default HeaderContext;

export class HeaderProvider extends React.Component {


  state = {
    authToken: TokenService.getAuthToken()
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

