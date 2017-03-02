import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { Field } from 'redux-form';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class SignInForm extends Component {
  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
     this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user.status === 'authenticated' && nextProps.user.user && !nextProps.user.error) {
      this.props.router.push('/');
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
      center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: 10
      },
      paper: {
        maxHeight: 400,
        maxWidth: 400,
        textAlign: 'center',
        padding: '20px 40px'
      },
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

    const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
        <TextField hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
        />
    );

    return (
        <div style={styles.center}>
          <Paper style={styles.paper}>
        <form onSubmit={handleSubmit}>
        <div>
        <Field name="username" component={renderTextField} label="用户名"/>
        </div>
        <div>
        <Field name="password" component={renderTextField} label="密码"/>
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
