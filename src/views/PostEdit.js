import React, { Component, PropTypes } from 'react';
import PostEditContainer from '../containers/PostEditContainer.js';

const PostEdit = ({ match }) => (
  <PostEditContainer id={match.params.id}/>
);

export default PostEdit;
