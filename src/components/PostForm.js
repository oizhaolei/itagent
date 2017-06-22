import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
    margin: 12,
};

class PostForm extends Component {
    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost && nextProps.newPost.post && !nextProps.newPost.error) {
            this.props.history.push('/post/' + nextProps.newPost.post._id);
        }
    }

    render() {
        const {fields: { title }, handleSubmit, submitting } = this.props;

        return (
            <div className="center-in-center">
              <form onSubmit={handleSubmit}>
                <TextField
                    name="title"
                    multiLine={true}
                    rows={5}
                    floatingLabelText="请提出您的问题"
                    floatingLabelFixed={true}
                />
                <br />

                <RaisedButton label="提交" primary={true} type="submit" disabled={submitting} />
              </form>
            </div>
        );
    }
}

export default withRouter(PostForm);
