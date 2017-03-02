import { connect } from 'react-redux';

import SignInForm from '../components/SignInForm.js';
import {signInUser, signInUserSuccess, signInUserFailure, resetUserFields } from '../actions/users';
import { reduxForm } from 'redux-form';


//Client side validation
function validate(values) {
  var errors = {};
   return errors;
}


//For any field errors upon submission (i.e. not instant check)
const onSubmit = (values, dispatch) => {
  return new Promise((resolve, reject) => {

   dispatch(signInUser(values))
      .then((response) => {
        let data = response.payload.data;
        //if any one of these exist, then there is a field error
        if(response.payload.status != 200) {
          //let other components know of error by updating the redux` state
          dispatch(signInUserFailure(response.payload));
           reject(data); //this is for redux-form itself
         } else {
          //store JWT Token to browser session storage
          //If you use localStorage instead of sessionStorage, then this w/ persisted across tabs and new windows.
          //sessionStorage = persisted only in current tab
          sessionStorage.setItem('jwtToken', response.payload.data.token);
          //let other components know that we got user and things are fine by updating the redux` state
          dispatch(signInUserSuccess(response.payload));
          resolve();//this is for redux-form itself
        }
      });
  });
};



const mapDispatchToProps = (dispatch) => {
  return {
   resetMe: () =>{
    //sign up is not reused, so we dont need to resetUserFields
    //in our case, it will remove authenticated users
     // dispatch(resetUserFields());
    }
  };
};


function mapStateToProps(state, ownProps) {
  return { 
    user: state.user
  };
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'SignInForm',
  validate,
  onSubmit
})(SignInForm));
