import React from 'react';
import PostContext from '../../contexts/PostContext';
import PostApiService from '../../services/PostApiService';


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
      <form onSubmit={this.handleSubmit}>
        <div>
          <textarea 
            name='text' 
            id='text' 
            placeholder='Leave your comment' 
            cols='30' 
            rows='3'
            required>
          </textarea>
          <button type='submit'>Add Comment</button>
        </div>
      </form>
    )
  }
}




export default CommentForm;