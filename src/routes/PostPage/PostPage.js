import React from 'react';
import Header from '../../components/Header/Header';
import PostContext from '../../contexts/PostContext';
import PostApiService from '../../services/PostApiService';
import CommentForm from '../../components/CommentForm/CommentForm';
import './PostPage.css';

class PostPage extends React.Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = PostContext;

  componentDidMount(){
    const {postId} = this.props.match.params;
    this.context.clearError();
    PostApiService.getPost(postId)
      .then(this.context.setPost)
      .catch(this.context.setError)
    PostApiService.getPostComments(postId)
      .then(this.context.setComments)
      .catch(this.context.setError)
  }

  componentWillMount(){
    this.context.clearPost();
  }

  renderPost(){
    const {post, comments} = this.context

    let commentContent;
    if(comments.length === 0){
       commentContent =  <p>No comments yet</p>
    }
    else {
      commentContent = comments.map(comment => {
        return <div key={comment.id} className='comment'>
          <p className='comment-text'>{comment.user.user_name}: {comment.text}</p>
        </div>
      })
    }


    return (
      <>
      <div className='post-info'>
        <h2 className='post-type'>{post.post_type}</h2>
        <p><span>created by: <em>{post.author.user_name}</em> on {new Date(post.author.date_created).toLocaleDateString('en-US')}</span></p>
        <ul className='post-item-attr'>
          <li><strong>Location: </strong> {post.location}</li>
          <li><strong>Style: </strong>{post.style}</li>
          <li><strong>Intruments needed: </strong>{post.instruments_need.split(' ').join(', ')}</li>
          <li><strong>Availability: </strong>{post.commitment}</li>
          <li><strong>Desired Skill: </strong>{post.skill_lvl}</li>
        </ul>
        <p className='description'><strong>Project Description: </strong>{post.description}</p>
      </div>
      <div className='comment-container'>
        <h3 className='comment-header'>Comments</h3>
        {commentContent}
        <CommentForm />
      </div>
      </>
    )

  }


  render(){
    const { error, post } = this.context
    let content;
    if(error){
      content = <div><p>There was an error</p></div>
    } else if (!post.id){
      content = <div><p>Loading...</p></div>
    } else {
    content = this.renderPost()
    }
    return (
      <>
      <Header />
      <div>
        {content}
      </div>
      </>
    )
  }
}


export default PostPage;