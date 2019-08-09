import React from 'react';
import PostContext from '../../contexts/PostContext';
import PostApiService from '../../services/PostApiService';
import CommentForm from '../../components/CommentForm/CommentForm';

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
        return <div key={comment.id}>
          <p><span>{comment.user.user_name}: {comment.text}</span></p>
        </div>
      })
    }


    return (
      <div>
        <h1>{post.post_type}</h1>
        <p><span>created by: <em>{post.author.user_name}</em> on {new Date(post.author.date_created).toLocaleDateString('en-US')}</span></p>
        <ul>
          <li>Location: {post.location}</li>
          <li>Style: {post.style}</li>
          <li>Intruments needed: {post.instruments_need.split(' ').join(', ')}</li>
          <li>Commitment: {post.commitment}</li>
          <li>Desired Skill: {post.skill_lvl}</li>
        </ul>
        <p>Project Description: {post.description}</p>
        <h3>Comments</h3>
        {commentContent}
        <CommentForm />
      </div>
    )

  }


  render(){
    if(this.context.comments)console.log(this.context.comments.length)
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
      <div>
        {content}
      </div>
    )
  }
}


export default PostPage;