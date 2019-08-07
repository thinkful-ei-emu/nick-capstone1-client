import React from 'react';
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
          <h1>{post.style}</h1>
          <p>Location: {post.location}</p>
          <p>Need: {post.instruments_need}</p>
          <p>{this.truncDesc(post.description)}</p>
        </div>
      )
    }
    else return (
      <div>
      <h1>{post.style}</h1>
      <h2>Posted by: <em>{post.author.user_name}</em> on {post.author.date_created}</h2>
      <p>Location: {post.location}</p>
      <p>Need: {post.instruments_need}</p>
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
    console.log(post)
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


