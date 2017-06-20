import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { Field } from 'redux-form';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class SignInForm extends Component {
    componentWillMount() {
        //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
        //always reset that global state back to null when you REMOUNT
        this.props.resetMe();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.user.status === 'authenticated' && nextProps.user.user && !nextProps.user.error) {
            this.props.history.push('/');
        }

        //error
        //Throw error if it was not already thrown (check this.props.user.error to see if alert was already shown)
        //If u dont check this.props.user.error, u may throw error multiple times due to redux-form's validation errors
        if(nextProps.user.status === 'signin' && !nextProps.user.user && nextProps.user.error && !this.props.user.error) {
            alert(nextProps.user.error.message);
        }
    }
    getStyles() {
        return {
            submit: {
                marginTop: 10,
                marginBottom: 20,
                width: '100%'
            }
        };
    }

    render() {
        const { pristine, handleSubmit, submitting } = this.props;
        const styles = this.getStyles();

        return (
            <div className="center-in-center">
              <Paper>
                <form onSubmit={handleSubmit}>
                  <div>
                    <Field name="username" component="input" placeholder="用户名"/>
                  </div>
                  <div>
                    <Field name="password" type="password" component="input" placeholder="密码"/>
                  </div>
                  <div>
                    <RaisedButton type="submit" disabled={pristine || submitting} label="登录" primary={true}/>
                  </div>
                </form>
              </Paper>
            </div>
        );
    }
}

export default withRouter(SignInForm);
