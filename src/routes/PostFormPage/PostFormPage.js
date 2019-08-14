import React from 'react';
import Header from '../../components/Header/Header';
import PostForm from '../../components/PostForm/PostForm';


class PostFormPage extends React.Component {


  static defaultProps = {
    histroy: {
      push: () => {},
    }
  }
  handlePostSuccess = () => {
    const { history } = this.props
    history.push('/posts')
  }

  render(){
    return (
      <>
      <Header />
      <div>
        <PostForm onPostSuccess={this.handlePostSuccess} />
      </div>
      </>
    )
  }

}

export default PostFormPage;