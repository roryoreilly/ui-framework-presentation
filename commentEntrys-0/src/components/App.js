import React, { Component } from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default class App extends Component {
  state = {
    comments: []
  }

  saveComment = (comment) => {
    this.setState(prevState => (
        {comments: [...prevState.comments, comment]}
      )
    );
  }

  render () {
    return (
      <div>
        <CommentBox saveComment={this.saveComment}/>
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}
