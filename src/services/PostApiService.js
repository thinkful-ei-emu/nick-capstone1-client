import config from '../config';

const PostApiService = {
  getAllPosts(){
    return fetch(`${config.API_ENDPOINT}/posts`)
      .then(res => 
        (!res.ok)
         ? res.json().then(e => Promise.reject(e))
         : res.json()
        )
  }
}

export default PostApiService;