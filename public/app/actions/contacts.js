import axios from 'axios';

//Contacts list
export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE';


const ROOT_URL = 'http://xijing.tttalk.org:3005/api';

export function fetchContacts() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/contacts`,
    headers: []
  });

  return {
    type: FETCH_CONTACTS,
    payload: request
  };
}

export function fetchContactsSuccess(contacts) {
  return {
    type: FETCH_CONTACTS_SUCCESS,
    payload: contacts
  };
}

export function fetchContactsFailure(error) {
  return {
    type: FETCH_CONTACTS_FAILURE,
    payload: error
  };
}
