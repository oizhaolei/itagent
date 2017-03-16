import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { Field } from 'redux-form';

import { TextField } from 'redux-form-material-ui';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class PostEditForm extends Component {
  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
     this.props.resetMe();
  }

  componentDidMount() {
    this.props.fetchPost(this.props.postId);
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
    const { post, loading, error } = this.props.editPost;
    if (loading) {
      return <div className="container">Loading...</div>;
    } else if(error) {
      return  <div className="alert alert-danger">{error.message}</div>
    } else if(!post) {
      return <span />
    }

    return (
        <div style={styles.center}>
          <Paper style={styles.paper}>
        <form onSubmit={handleSubmit}>
        <div>
        <Field name="username" component={TextField} value="post.title"/>
        </div>
        <div>
        <RaisedButton type="submit" disabled={pristine || submitting} label="保存" primary={true}/>
        </div>
      </form>
      </Paper>
      </div>
    );
  }
}

export default withRouter(PostEditForm);
