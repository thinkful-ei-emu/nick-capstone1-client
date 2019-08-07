import React from 'react'
import PostListItem from '../../components/PostListItem/PostListItem';
import PostListContext from '../../contexts/PostListContext';
import PostApiService from '../../services/PostApiService';

class PostListPage extends React.Component {

  static contextType = PostListContext;

  componentDidMount(){
    this.context.clearError()
    PostApiService.getAllPosts()
      .then(this.context.setPostList)
      .catch(this.context.setError)
  }
  

  renderPosts() {
    const { postList = []} =  this.context;
    return postList.map(post => 
      <PostListItem 
      key={post.id}
      post={post}/>
      )
  }

  render() {
    return (
      <div>
      {this.renderPosts()}
      </div>
    )
  }
}

export default PostListPage;