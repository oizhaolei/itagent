import React from 'react';

import PostsListContainer from '../containers/PostsListContainer';
import BottomTab from '../components/BottomTab';

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Posts = () => (
    <div>
      <div className="center-content">
        <PostsListContainer />
      </div>
      <div className="bottom">
        <BottomTab />
      </div>
    </div>
);

export default Posts;
