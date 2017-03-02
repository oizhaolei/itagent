import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

const Chat = () => (
  <div>
    <List>
      <Subheader>技术支持</Subheader>
      <ListItem
        primaryText="通知小助手"
        leftAvatar={<Avatar src="http://www.material-ui.com/images/raquelromanp-128.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Jet"
        leftAvatar={<Avatar src="http://www.material-ui.com/images/ok-128.jpg" />}
      />
      <ListItem
        primaryText="蒋"
        leftAvatar={<Avatar src="http://www.material-ui.com/images/kolage-128.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="赵磊"
        leftAvatar={<Avatar src="http://www.material-ui.com/images/jsa-128.jpg" />}
      />
      <ListItem
        primaryText="金华锡"
        leftAvatar={<Avatar src="http://www.material-ui.com/images/kerem-128.jpg" />}
      />
    </List>
    <Divider />
    <List>
      <Subheader>运维</Subheader>
      <ListItem
        primaryText="sara.小黄"
        leftAvatar={<Avatar src="http://www.material-ui.com/images/chexee-128.jpg" />}
      />
      <ListItem
        primaryText="Yui Aragaki"
        leftAvatar={<Avatar src="http://www.material-ui.com/images/uxceo-128.jpg" />}
      />
    </List>
  </div>
);

export default Chat;
