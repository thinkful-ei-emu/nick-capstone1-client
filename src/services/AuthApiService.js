import config from '../config';
import TokenService from './TokenService';


const AuthApiServices = {
  postUser(user){
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(res => 
      (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json())
  },
  postLogin(creds){
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(creds),
    })
    .then(res => 
      (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
    )
    .then(res => {
      TokenService.saveAuthToken(res.authToken);
      return res
    })
  }

}

export default AuthApiServices;