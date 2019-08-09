import React from 'react';
import { Link } from 'react-router-dom';
import PostListItem from '../../components/PostListItem/PostListItem';
import PostListContext from '../../contexts/PostListContext';
import PostApiService from '../../services/PostApiService';
import Lists from '../../Utils/Lists'

class PostListPage extends React.Component {

  static contextType = PostListContext;

  

  componentDidMount(){
    this.context.clearError()
    PostApiService.getAllPosts()
      .then(this.context.setPostList)
      .catch(this.context.setError)
  }
  
  handleFilter = ev => {
    ev.preventDefault()
    this.context.clearPostList()
    const {location_filter} = ev.target
    console.log(location_filter.value)
    PostApiService.getPostsByLocation(location_filter.value)
      .then(this.context.setPostList)
      .catch(this.context.setError)
  }

  handleClearFilter = ev => {
    ev.preventDefault();
    this.context.clearPostList()
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
    let locations = Lists.makeOptions(Lists.locationOptions);
    return (
      <div>
        <form onSubmit={this.handleFilter}>
          <select name='location_filter' id='location_filter'>
           {locations}
          </select>
          <button type='submit'>Filter Location</button>
          <button type='button' onClick={this.handleClearFilter}>Clear Filter</button>
        </form>
        <Link to={'/postform'}>Create Post</Link>
      {this.renderPosts()}
      </div>
    )
  }
}

export default PostListPage;