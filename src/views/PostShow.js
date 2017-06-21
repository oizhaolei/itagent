import React from 'react';
import PostDetailContainer from '../containers/PostDetailContainer.js';

const PostShow = ({ match }) => (
    <PostDetailContainer id={match.params.id} />
);

export default PostShow;
