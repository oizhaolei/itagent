import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import MessageList from '../components/MessageList';
import ChatSend from '../components/ChatSend';

const styles = {
  top: {
    position: 'fixed',
    width: '100%',
    WebkitAppRegion: 'drag'
  },
  center_content: {
    paddingTop: '50px',
    paddingBottom: '50px',
  },
  bottom: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: 9,
  }
};

class Chat extends Component  {
  state = {
    dataSource: [],
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
        <div>
        <div style={styles.top}>
        <AppBar
      title={this.props.params.id}
      iconElementLeft={<IconButton onTouchTap={() => this.props.router.push('/')}><NavigationClose /></IconButton>}
        />
        </div>
        <div style={styles.center_content}>
        <MessageList />
        </div>
        <div style={styles.bottom}>
        <ChatSend />
        </div>
        </div>
        );
    }
}
export default Chat;
