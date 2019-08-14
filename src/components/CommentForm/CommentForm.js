import React from 'react';
import PostContext from '../../contexts/PostContext';
import PostApiService from '../../services/PostApiService';
import './CommentForm.css';

class CommentForm extends React.Component {
  static contextType = PostContext


  handleSubmit = ev => {
    ev.preventDefault()
    const {post} = this.context;
    const {text} = ev.target;

    PostApiService.postComment(post.id, text.value)
      .then(this.context.addComment)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)

  }

  render(){

    return (
      <form onSubmit={this.handleSubmit} >
        <div className='comment-form-container'>
          <textarea 
            name='text' 
            id='text' 
            placeholder='Leave your comment' 
            cols='30' 
            rows='3'
            className='comment-text comment-text-input'
            required>
          </textarea>
        </div>
        <button type='submit' className='comment-button'>Add Comment</button>
      </form>
    )
  }
}




export default CommentForm;