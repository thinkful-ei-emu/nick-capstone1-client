import jwtDecode from 'jwt-decode';
import config from '../config';


const TokenService = {
  saveAuthToken(token){
    console.log('ran save auth token')
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken(){
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken(){
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken(){
    return !!TokenService.getAuthToken()
  },
  parseJwt(jwt) {
    return jwtDecode(jwt)
  },
  readJwt(){
    return TokenService.parseJwt(TokenService.getAuthToken())
  }
}

export default TokenService;