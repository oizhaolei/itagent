import React, {Component} from 'react';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import ContactItem from './ContactItem';

class ContactsList extends Component {
  componentWillMount() {
    this.props.fetchContacts();
  }
  render() {
    const { contacts, loading, error } = this.props.contactsList;
    if(loading) {
      return <div className="container"><h1>Contacts</h1><h3>Loading...</h3></div>;
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>;
    }
    return (
    <div>
    {contacts.map((group) => (
        <List
      key={group.title}
        >
    <Divider inset={true} />
        <Subheader>{group.title}</Subheader>
        {group.list.map((item) => (
            <ContactItem
          key={item.title}
          contact={item}
            />
        ))}
      </List>
    ))}
  </div>
    );
  }
}

export default ContactsList;
