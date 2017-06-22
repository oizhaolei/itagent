import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import UserForm from '../components/UserForm.js';
import {
    fetchUser, fetchUserSuccess, fetchUserFailure, resetActiveUser, resetDeletedUser
}
from '../actions/users';
import {
    updateUser, updateUserSuccess, updateUserFailure,
}
from '../actions/users';

function validate(values) {
    const errors = {};

    if (!values.eid || values.eid.trim() === '') {
        errors.title = 'Enter a eid';
    }

    return errors;
}

//For any field errors upon submission (i.e. not instant check)
const onSubmit = (values, dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(updateUser(values))
            .then((response) => {
                let data = response.payload.data;
                //if any one of these exist, then there is a field error
                if(response.payload.status != 200) {
                    //let other components know of error by updating the redux` state
                    dispatch(updateUserFailure(response.payload));
                    reject(data); //this is for redux-form itself
                } else {
                    //let other components know that we got user and things are fine by updating the redux` state
                    dispatch(updateUserSuccess(response.payload));
                    resolve();//this is for redux-form itself
                }
            });
    });
};

function mapStateToProps(state, ownProps) {
    return {
        initialValues: state.user.user,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: () => {
            dispatch(fetchUser()).then((data) => {
                !data.error ? dispatch(fetchUserSuccess(data.payload)) : dispatch(fetchUserFailure(data.payload));
            });
        },
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'UserForm',
    validate,
    onSubmit,
})(UserForm));
