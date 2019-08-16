import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import PostListItem from '../../components/PostListItem/PostListItem';
import PostListContext from '../../contexts/PostListContext';
import PostApiService from '../../services/PostApiService';
import Lists from '../../Utils/Lists';
import './PostListPage.css';

class PostListPage extends React.Component {

  static contextType = PostListContext;

  

  componentDidMount(){
    this.context.clearError()
    PostApiService.getAllPosts()
      .then(this.context.setPostList)
      .catch(this.context.setError)
  }
  

  handleClearFilter = ev => {
    ev.preventDefault();
    PostApiService.getAllPosts()
      .then(this.context.setPostList)
      .catch(this.context.setError)
  }

  handleFilter = ev => {
    ev.preventDefault();
    const {instrument_filter, location_filter } = ev.target;
    PostApiService.getFilteredPosts(instrument_filter.value, location_filter.value)
      .then(this.context.setPostList)
      .catch(this.context.setError)
  }


  renderPosts() {
    const { postList = []} =  this.context;
    return postList.map((post, index) => 
      <PostListItem 
      index={index}
      key={post.id}
      post={post}/>
      )
  }

  render() {
    const {error} = this.context;
    let locations = Lists.makeOptions(Lists.locationOptions);
    let instruments = Lists.makeOptions(Lists.instrumentOptions)
    return (
      <>
      <Header />
      <div className='post-list-filters'>
        <form onSubmit={this.handleFilter} className='filter-form'>
        <select name='location_filter' defaultValue='' id='location_filter' className='filter-select'>
          <option value='' disabled >Choose location</option>
           {locations}
          </select>
          <select name='instrument_filter' defaultValue='' id='instrument_filter' className='filter-select'>
          <option value='' disabled >Choose instrument</option>
           {instruments}
          </select>
          <button type='submit' className='filter-button'>Filter</button>
        <button type='button' onClick={this.handleClearFilter} className='filter-button'>Clear</button>
        </form>
        <Link to={'/postform'}><button className='create-post-button'>Create Post</button></Link>
      </div>
      {error && <div className='error'><p>Something Went Wrong</p></div>}
      <div className='post-list'>
      {this.renderPosts()}
      </div>
      </>
    )
  }
}

export default PostListPage;