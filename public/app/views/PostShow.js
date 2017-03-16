import React, { Component, PropTypes } from 'react';
import PostDetailsContainer from '../containers/PostDetailsContainer.js';

class PostsShow extends Component {
  render() {
    return (
        <PostDetailsContainer id={this.props.params.id}/>
    );
  }
}

export default PostsShow;
