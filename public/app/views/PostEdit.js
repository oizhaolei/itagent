import React, { Component, PropTypes } from 'react';
import PostEditContainer from '../containers/PostEditContainer.js';

class PostEdit extends Component {
  render() {
    return (
        <PostEditContainer id={this.props.params.id}/>
    );
  }
}

export default PostEdit;
