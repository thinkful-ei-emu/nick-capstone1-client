import React, { Component } from 'react'

const PostListContext = React.createContext({
  postList: [],
  error: null,
  clearPostList: () => {},
  setError: () => {},
  clearError: () => {},
  setPostList: () => {},
})
export default PostListContext

export class PostListProvider extends Component {
  state = {
    postList: [],
    error: null,
  };

  setPostList = postList => {
    this.setState({ postList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearPostList = () => {
    this.setState({
      postList: []
    })
  }
  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      postList: this.state.postList,
      error: this.state.error,
      clearPostList: this.clearPostList,
      setError: this.setError,
      clearError: this.clearError,
      setPostList: this.setPostList,
    }
    return (
      <PostListContext.Provider value={value}>
        {this.props.children}
      </PostListContext.Provider>
    )
  }
}
