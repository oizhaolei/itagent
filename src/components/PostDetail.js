import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

class PostDetail extends Component {
    componentWillUnmount() {
        //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
        //always reset that global state back to null when you REMOUNT
        this.props.resetMe();
    }

    componentWillMount() {
        this.props.fetchPost(this.props.postId);
    }

    render() {
        const { post, loading, error } = this.props.activePost;
        if (loading) {
            return <div className="container">Loading...</div>;
        } else if(error) {
            return  <div className="alert alert-danger">{error.message}</div>
        } else if(!post) {
            return <span />
        }

        return (
            <div className="center-content">
              <div className="container">
                <h3>{post.title}</h3>
                <pre>{post.answer}</pre>
              </div>
            </div>
        );
    }
}

export default withRouter(PostDetail);
