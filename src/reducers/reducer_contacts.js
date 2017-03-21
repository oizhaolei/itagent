import {
  FETCH_CONTACTS, FETCH_CONTACTS_SUCCESS, FETCH_CONTACTS_FAILURE,
} from '../actions/contacts';

const INITIAL_STATE = {
  contactsList: {
    contacts: [],
    error:null,
    loading: false
  },
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

  case FETCH_CONTACTS:// start fetching contacts and set loading = true
    return { ...state, contactsList: {contacts:[], error: null, loading: true} }; 
  case FETCH_CONTACTS_SUCCESS:// return list of contacts and make loading = false
    return { ...state, contactsList: {contacts: action.payload.data, error:null, loading: false} };
  case FETCH_CONTACTS_FAILURE:// return error and make loading = false
    error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, contactsList: {contacts: [], error: error, loading: false} };
  default:
    return state;
  }
}
