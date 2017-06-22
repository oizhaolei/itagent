import React from 'react';

import BackBar from '../components/BackBar.js';
import PostDetailContainer from '../containers/PostDetailContainer.js';

const PostShow = ({ match }) => (
    <div>
      <div className="top">
        <BackBar/>
      </div>
      <div className="center-content">
        <PostDetailContainer id={match.params.id} />
      </div>
    </div>
);

export default PostShow;
