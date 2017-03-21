import React from 'react';

import ContactsListContainer from '../containers/ContactsListContainer';
import BottomNavigationExampleSimple from '../components/BottomNavigationExampleSimple';

const Contacts = () => (
    <div>
    <div className="center_content">
    <ContactsListContainer />
    </div>
    <div className="bottom">
    <BottomNavigationExampleSimple />
    </div>
    </div>
);

export default Contacts;
