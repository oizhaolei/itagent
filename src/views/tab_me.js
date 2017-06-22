import React from 'react';

import BottomTab from '../components/BottomTab';
import UserFormContainer from '../containers/UserFormContainer.js';

const Me = () => (
    <div>
      <UserFormContainer />
      <div className="bottom">
        <BottomTab />
      </div>
    </div>
);

export default Me;
