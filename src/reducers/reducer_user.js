
import {
  VALIDATE_EMAIL, VALIDATE_EMAIL_SUCCESS, VALIDATE_EMAIL_FAILURE,
  FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, RESET_ACTIVE_USER,
  ME_FROM_TOKEN, ME_FROM_TOKEN_SUCCESS, ME_FROM_TOKEN_FAILURE, RESET_TOKEN,
  SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE, RESET_USER,
  UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE,
  SIGNIN_USER, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE,
  LOGOUT_USER, UPDATE_USER_EMAIL,
} from '../actions/users';


//user = userobj,
// status can be:
// 1. 'storage' ie. localstorage / sessionstorage)
// 2. 'signup' (signing up)
// 3. 'signin' (signing in)
// 4. 'validate'(validate fields)
// 5. 'validate_email' (validating email token)
// 5. 'authenticated'(after signin)
// 6. 'logout' (after logout)

const INITIAL_STATE = { user: { eid: '', username: '', seatno: '' }, status: null, error: null, loading: false };

export default function (state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {

    case FETCH_USER:
      return { ...state, user: { eid: '', username: '', seatno: '' }, error: null, loading: true };
    case FETCH_USER_SUCCESS:
      return { ...state, user: action.payload.data, error: null, loading: false };
    case FETCH_USER_FAILURE:
      error = action.payload.data || { message: action.payload.message };//2nd one is network or server down errors
      return { ...state, user: { eid: '', username: '', seatno: '' }, error, loading: false };
    case RESET_ACTIVE_USER:
      return { ...state, user: { eid: '', username: '', seatno: '' }, error: null, loading: false };

    case VALIDATE_EMAIL://check email verification token
      return { ...state, user: { eid: '', username: '', seatno: '' }, status: 'validate_email', error: null, loading: true };
    case VALIDATE_EMAIL_SUCCESS:
      return { ...state, user: action.payload.data.user, status: 'authenticated', error: null, loading: false }; //<-- authenticated & email verified
    case VALIDATE_EMAIL_FAILURE:
      error = action.payload.data || { message: action.payload.message };//2nd one is network or server down errors
      return { ...state, user: { eid: '', username: '', seatno: '' }, status: 'validate_email', error, loading: false }; //<-- authenticated

    case ME_FROM_TOKEN:// loading currentUser("me") from jwttoken in local/session storage storage,
      return { ...state, user: { eid: '', username: '', seatno: '' }, status: 'storage', error: null, loading: true };
    case ME_FROM_TOKEN_SUCCESS://return user, status = authenticated and make loading = false
      return { ...state, user: action.payload.data.user, status: 'authenticated', error: null, loading: false }; //<-- authenticated
    case ME_FROM_TOKEN_FAILURE:// return error and make loading = false
      error = action.payload.data || { message: action.payload.message };//2nd one is network or server down errors
      return { ...state, user: { eid: '', username: '', seatno: '' }, status: 'storage', error, loading: false };
    case RESET_TOKEN:// remove token from storage make loading = false
      return { ...state, user: { eid: '', username: '', seatno: '' }, status: 'storage', error: null, loading: false };

    case UPDATE_USER:// sign up user, set loading = true and status = update
      return { ...state, user: { eid: '', username: '', seatno: '' }, status: 'update', error: null, loading: true };
    case UPDATE_USER_SUCCESS://return user, status = authenticated and make loading = false
      return { ...state, user: action.payload.data.user, status: 'update', error: null, loading: false }; //<-- authenticated
    case UPDATE_USER_FAILURE:// return error and make loading = false
      error = action.payload.data || { message: action.payload.message };//2nd one is network or server down errors
      return { ...state, user: { eid: '', username: '', seatno: '' }, status: 'update', error, loading: false };

    case SIGNUP_USER:// sign up user, set loading = true and status = signup
      return { ...state, user: { eid: '', username: '', seatno: '' }, status: 'signup', error: null, loading: true };
    case SIGNUP_USER_SUCCESS://return user, status = authenticated and make loading = false
      return { ...state, user: action.payload.data.user, status: 'authenticated', error: null, loading: false }; //<-- authenticated
    case SIGNUP_USER_FAILURE:// return error and make loading = false
      error = action.payload.data || { message: action.payload.message };//2nd one is network or server down errors
      return { ...state, user: { eid: '', username: '', seatno: '' }, status: 'signup', error, loading: false };


    case SIGNIN_USER:// sign in user,  set loading = true and status = signin
      return { ...state, user: { eid: '', username: '', seatno: '' }, status: 'signin', error: null, loading: true };
    case SIGNIN_USER_SUCCESS://return authenticated user,  make loading = false and status = authenticated
      return { ...state, user: action.payload.data.user, status: 'authenticated', error: null, loading: false }; //<-- authenticated
    case SIGNIN_USER_FAILURE:// return error and make loading = false
      error = action.payload.data || { message: action.payload.message };//2nd one is network or server down errors
      return { ...state, user: { eid: '', username: '', seatno: '' }, status: 'signin', error, loading: false };


    case UPDATE_USER_EMAIL:
      return { ...state, user: { ...state.user, email: action.payload.email } };


    case LOGOUT_USER:
      return { ...state, user: null, status: 'logout', error: null, loading: false };

    case RESET_USER:// reset authenticated user to initial state
      return { ...state, user: { eid: '', username: '', seatno: '' }, status: null, error: null, loading: false };

    default:
      return state;
  }
}
