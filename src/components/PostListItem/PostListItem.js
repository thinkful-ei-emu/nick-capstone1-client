import React from 'react';
import { Link } from 'react-router-dom';
import './PostListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

  classByIndex = index => {
    if (index === 0 || index % 2 === 0) {
        return 'odd-item';
      } else {
        return 'even-item';
      }
  }

 

  determineContent = post => { 
    let buttonText = this.buttonText();
    let indexClass = this.classByIndex(this.props.index);
    if(this.state.isCollapsed){ 
      return (
        <div className={indexClass}>
          <Link to={`/posts/${post.id}`}>
            <h2 className='item-header'>{post.style}</h2>
          </Link>
          <p><strong>Location: </strong>{post.location}</p>
          <p><strong>Need: </strong>{post.instruments_need.split(' ').join(', ')}</p>
          <p>{this.truncDesc(post.description)}</p>
        <button onClick={this.toggleCollapse} className='toggle'>{buttonText}</button>
        </div>
      )
    }
    else return (
      <div className={indexClass}>
      <Link to={`/posts/${post.id}`}>
        <h2 className='item-header'>{post.style}</h2>
      </Link>
      <p>Posted by: <em>{post.author.user_name}</em> on {new Date(post.author.date_created).toLocaleDateString('en-US')}</p>
      <ul className='post-item-attr'>
        <li><strong>Location: </strong>{post.location}</li>
        <li><strong>Need: </strong>{post.instruments_need.split(' ').join(', ')}</li>
        <li><strong>Style:</strong> {post.style}</li>
        <li><strong>Availability:</strong> {post.commitment}</li>
        <li><strong>Desired Skill:</strong> {post.skill_lvl}</li>
      </ul>
      <p>{post.description}</p>
      <button onClick={this.toggleCollapse} className='toggle'>{buttonText}</button>
      </div>
    )
  } 

  buttonText = () => {
    if(this.state.isCollapsed){
      return <FontAwesomeIcon size='lg' icon='arrow-alt-circle-down' />
    }
    else return <FontAwesomeIcon size='lg' icon='arrow-alt-circle-up' />
  }

  truncDesc = description => {
    const newDesc = description.split(' ').splice(0, 8).join(' ').concat('...')
    return newDesc;
  }

  render(){
    const { post } = this.props;
    let content = this.determineContent(post);
    return (
      <>
      {content}
      </>
    )
  }

}

export default PostListItem;


