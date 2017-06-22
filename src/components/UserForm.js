import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { Field } from 'redux-form'

import RaisedButton from 'material-ui/RaisedButton';
import {
    TextField,
} from 'redux-form-material-ui';

const style = {
    margin: 12,
};

class PostForm extends Component {
    componentWillMount() {
        this.props.fetchUser();
    }

    render() {
        const {handleSubmit, submitting } = this.props;
        return (
            <div className="center-in-center">
              <form onSubmit={handleSubmit}>
                <Field
                    component={TextField}
                    name="eid"
                    hintText="sara.huang"
                    label="eid"
                />
                <br />
                <Field
                    component={TextField}
                    name="username"
                    hintText="黄莎莎"
                    label="姓名"
                />
                <br />
                <Field
                    component={TextField}
                    name="seatno"
                    hintText="G106"
                    label="座位号"
                />
                <br />
                <RaisedButton label="提交" primary={true} type="submit" disabled={submitting} />
              </form>
            </div>
        );
    }
}

export default withRouter(PostForm);
