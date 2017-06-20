import React, {Component} from 'react';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import MessageItem from './MessageItem';

class MessagesList extends Component {
  render() {
      return <div className="container"><h1>Messages</h1><h3>Loading...</h3></div>;
  }
}

export default MessagesList;
