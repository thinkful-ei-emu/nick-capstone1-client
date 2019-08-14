import config from '../config';
import TokenService from './TokenService';

const PostApiService = {
  getAllPosts(){
    return fetch(`${config.API_ENDPOINT}/posts`)
      .then(res => 
        (!res.ok)
         ? res.json().then(e => Promise.reject(e))
         : res.json()
        ) 
  },
  getPost(postId){
    return fetch(`${config.API_ENDPOINT}/posts/${postId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
    .then(res => 
      (!res.ok) 
      ? res.json().then(e => Promise.reject(e))
      : res.json()
    )
  },
  makePost(post){
    return fetch(`${config.API_ENDPOINT}/posts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(post),
    })
      .then(res => 
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        )
  },
  getPostComments(postId){
    return fetch(`${config.API_ENDPOINT}/posts/${postId}/comments`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
    .then(res =>
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
      )
  },
  getPostsByLocation(location){
    return fetch(`${config.API_ENDPOINT}/posts?location=${location}`, {
      header: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    }) 
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json())
  },
  getFilteredPosts(...args){
    console.log('args', args)
    let instrument = args[0];
    let location = args[1];
    let queryString= `${config.API_ENDPOINT}/posts?`;
    if(instrument){
      queryString += `instrument=` + instrument;
    } 
    if (location){
      queryString += `&location=` + location;
    }
    return fetch(queryString, {
      header: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
    .then(res =>
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json())
  },
  getPostsByInstrument(instrument){
    return fetch(`${config.API_ENDPOINT}/posts?instrument=${instrument}`, {
      header: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    }) 
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json())
  },
  postComment(postId, text){
    return fetch(`${config.API_ENDPOINT}/posts/${postId}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        post_id: postId,
        text,
      }),
    })
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
      )
  },
}

export default PostApiService;