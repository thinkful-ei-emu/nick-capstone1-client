import React from 'react';
import { Link } from 'react-router-dom';
import './PostListItem.css';


class PostListItem extends React.Component {


  state = {
    isCollapsed: true
  }

  toggleCollapse = (ev) => {
    ev.preventDefault();
    this.setState({
      isCollapsed: !this.state.isCollapsed
    })
  }

  determineContent = (post) => {
    if(this.state.isCollapsed){
      return (
        <div>
          <Link to={`/posts/${post.id}`}>
            <h1>{post.style}</h1>
          </Link>
          <p>Location: {post.location}</p>
          <p>Need: {post.instruments_need.split(' ').join(', ')}</p>
          <p>{this.truncDesc(post.description)}</p>
        </div>
      )
    }
    else return (
      <div>
      <Link to={`/posts/${post.id}`}>
        <h1>{post.style}</h1>
      </Link>
      <h2>Posted by: <em>{post.author.user_name}</em> on {new Date(post.author.date_created).toLocaleDateString('en-US')}</h2>
      <p>Location: {post.location}</p>
      <p>Need: {post.instruments_need.split(' ').join(', ')}</p>
      <p>{post.description}</p>
      <ul>
        <li>Style: {post.style}</li>
        <li>Time: {post.commitment}</li>
        <li>Desired Skill: {post.skill_lvl}</li>
      </ul>
    </div>
    )
  }

  buttonText = () => {
    if(this.state.isCollapsed){
      return 'show more'
    }
    else return 'show less'
  }

  truncDesc = description => {
    const newDesc = description.split(' ').splice(0, 8).join(' ').concat('...')
    return newDesc;
  }

  render(){
    const { post } = this.props;
    let buttonText = this.buttonText();
    let content = this.determineContent(post);
    return (
      <div style={{ border: '1px solid red'}}>
      {content}
        <button onClick={this.toggleCollapse}>{buttonText}</button>
      </div>
    )
  }

}

export default PostListItem;


