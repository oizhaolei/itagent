import React from 'react';

import PostsListContainer from '../containers/PostsListContainer';
import BottomNavigationExampleSimple from '../components/BottomNavigationExampleSimple';

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Tools = () => (
    <div>
    <div className="center_content">
    <PostsListContainer />
    </div>
    <div className="bottom">
    <BottomNavigationExampleSimple />
    </div>
    </div>
);

export default Tools;
