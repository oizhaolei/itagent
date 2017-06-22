import React, { Component } from 'react';

import BackBar from '../components/BackBar.js';
import PostFormContainer from '../containers/PostFormContainer.js';

class PostsNew extends Component {
  render() {
    return (
        <div>
          <div className="top">
            <BackBar/>
          </div>
          <PostFormContainer />
        </div>
    );
  }
}


export default PostsNew;
