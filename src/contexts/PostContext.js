import React from 'react';

const nullPost = {
  author: {},
};

const PostContext = React.createContext({
  post: nullPost,
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setPost: () => {},
  clearPost: ()=> {},
  setComments: () => {},
  addComments: () => {},
})

export default PostContext;

export class PostProvider extends React.Component {
  state = {
    post: nullPost,
    error: null,
  };

  setError = err => {
    console.error(err)
    this.setState({
      error: {err}
    })
  }


  clearError = () => {
    this.setState({
      error: null
    })
  }

  setPost = post => {
    this.setState({
      post
    })
  }

  setComments = comments => {
    this.setState({
      comments
    })
  }

  clearPost = () => {
    this.setPost(nullPost)
    this.setComments([])
  }

  addComment = comments => {
    this.setState([
      ...this.state.comments,
      comments
    ])
  }

  render(){
    const value = {
      post: this.state.post,
  comments: this.state.comments,
  error: this.state.error,
  setError: this.setError,
  clearError: this.clearError,
  setPost: this.setPost,
  clearPost: this.clearPost,
  setComments: this.setComments,
  addComments: this.addComments,
    }

    return (
      <PostContext.Provider value={value}>
        {this.props.children}
      </PostContext.Provider>
    )
  }


}