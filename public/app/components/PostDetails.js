import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';

import AppBar from 'material-ui/AppBar';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import HeaderContainer from '../containers/HeaderContainer.js';

class PostDetails extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUnmount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
    this.props.resetMe();
  }

  componentDidMount() {
    this.props.fetchPost(this.props.postId);
  }

  editPost(id) {
    console.log('edit', id);
  }

  deletePost(id) {
    console.log('delete', id);
  }
  render() {
    const styles = {
      top: {
        position: 'fixed',
        WebkitAppRegion: 'drag'
      },
      center_content: {
        paddingTop: '50px',
        paddingBottom: '50px',
      }
    };
    const { post, loading, error } = this.props.activePost;
    if (loading) {
      return <div className="container">Loading...</div>;
    } else if(error) {
      return  <div className="alert alert-danger">{error.message}</div>
    } else if(!post) {
      return <span />
    }

    const actionButton = <IconMenu
    iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
          <MenuItem primaryText="Edit" onTouchTap={() => {this.editPost(post._id)}} />
          <MenuItem primaryText="Delete" onTouchTap={() => {this.deletePost(post._id)}}/>
      </IconMenu>;

    return (
        <div>
        <AppBar
      style={styles.top}
      title="POST"
      iconElementLeft={<IconButton onTouchTap={() => this.props.router.push('/tools')}><NavigationClose /></IconButton>}
      iconElementRight={actionButton}
        />

        <div style={styles.center_content}>
      <div className="container">
        <h3>{post.title}</h3>
        <h6>Categories: {post.author}</h6>
        <img src={post.img} />
      </div>
        </div>
        </div>
    );
  }
}

export default withRouter(PostDetails);
