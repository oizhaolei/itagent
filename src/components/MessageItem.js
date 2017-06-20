import React, {Component} from 'react';
import { withRouter } from 'react-router';

import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class MessageItem extends Component {
    chat(id) {
        this.props.history.push('/chat/' + id);
    }

    render() {
        const { contact } = this.props;
        const rightIcon = (contact.unread > 0) ? <CommunicationChatBubble /> : null;
        return (
            <ListItem
                primaryText={contact.title}
                leftAvatar={<Avatar src={contact.avatar} />}
                rightIcon={rightIcon}
                onTouchTap={() => this.chat(contact._id)}
            />
        );
    }
}

export default withRouter(MessageItem);
