import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class PostsForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
     // this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost.post && !nextProps.newPost.error) {
      this.context.router.push('/');
    }
  }

  renderError(newPost) {
    if(newPost && newPost.error && newPost.error.message) {
      return (
        <div className="alert alert-danger">
          {newPost ? newPost.error.message : ''}
        </div>
      );
    } else {
      return <span></span>
    }
  }

  render() {
    const {asyncValidating, fields: { title, categories, content }, handleSubmit, submitting, newPost } = this.props;

    return (
      <div className="container">
      {this.renderError(newPost)}
      <form>
        <div>
          <label className="control-label">Title*</label>
          <input type="text" className="form-control" {...title} />
          <div className="help-block">
          </div>
          <div className="help-block">
            {asyncValidating === 'title'? 'validating..': ''}
          </div>
        </div>

        <div>
          <label className="control-label">Categories*</label>
          <input type="text" className="form-control" {...categories} />
          <div className="help-block">
          </div>
        </div>

        <div>
          <label className="control-label">Content*</label>
          <textarea className="form-control" {...content} />
          <div className="help-block">
          </div>
        </div>

        <button type="submit" className="btn btn-primary"  disabled={submitting} >Submit</button>
        <Link to="/" className="btn btn-error">Cancel</Link>
      </form>
      </div>
    );
  }
}

export default PostsForm;
