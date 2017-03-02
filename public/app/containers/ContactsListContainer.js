import { connect } from 'react-redux';
import { fetchContacts, fetchContactsSuccess, fetchContactsFailure } from '../actions/contacts';

import ContactsList from '../components/ContactsList';


const mapStateToProps = (state) => {
  return { 
    contactsList: state.contacts.contactsList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: () => {
      dispatch(fetchContacts()).then((response) => {
        !response.error ? dispatch(fetchContactsSuccess(response.payload)) : dispatch(fetchContactsFailure(response.payload));
      });
    }
  };
};

const ContactsListContainer = connect(mapStateToProps, mapDispatchToProps)(ContactsList);

export default ContactsListContainer;
