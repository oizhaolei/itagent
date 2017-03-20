import React, { Component, PropTypes } from 'react';
import PostDetailsContainer from '../containers/PostDetailsContainer.js';

const PostsShow = ({ match }) => (
    <PostDetailsContainer id={match.params.id}/>
);

export default PostsShow;
