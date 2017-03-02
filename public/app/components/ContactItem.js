import React, {Component} from 'react';
import { withRouter } from 'react-router';

import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class ContactItem extends Component {
  render() {
    const { contact } = this.props;
    return (
        <ListItem
      primaryText={contact.title}
      leftAvatar={<Avatar src={contact.avatar} />}
      rightIcon={<CommunicationChatBubble />}
      onTouchTap={() => {this.props.router.push('/chat');}}
        />
    );
  }
}

export default withRouter(ContactItem);
