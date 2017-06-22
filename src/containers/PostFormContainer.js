import { connect } from 'react-redux';

import { reduxForm } from 'redux-form';
import PostForm from '../components/PostForm.js';
import {
  createPost, createPostSuccess, createPostFailure,
}
from '../actions/posts';

//Client side validation
function validate(values) {
    const errors = {};

    if (!values.title || values.title.trim() === '') {
        errors.title = 'Enter a Title';
    }
    
    return errors;
}

//For any field errors upon submission (i.e. not instant check)
const onSubmit = (values, dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(createPost(values))
            .then((response) => {
                let data = response.payload.data;
                //if any one of these exist, then there is a field error
                if(response.payload.status != 200) {
                    //let other components know of error by updating the redux` state
                    dispatch(createPostFailure(response.payload));
                    reject(data); //this is for redux-form itself
                } else {
                    //let other components know that we got user and things are fine by updating the redux` state
                    dispatch(createPostSuccess(response.payload));
                    resolve();//this is for redux-form itself
                }
            });
    });
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};
1
function mapStateToProps(state, ownProps) {
    return {
        newPost: state.posts.newPost,
    };
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'PostNewForm',
    fields: ['title'],
    asyncBlurFields: ['title'],
    validate,
    onSubmit,
})(PostForm));
