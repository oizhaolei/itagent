import React, {Component} from 'react';
import { withRouter } from 'react-router';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import SearchIcon from 'material-ui/svg-icons/action/search';

class Header extends Component {

    handleChange = (event, logged) => {
      this.setState({logged: logged});
    };

    render() {
      let loginButton;
      if (this.props.user.status === 'authenticated') {
        loginButton = <IconMenu
  iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
          <MenuItem primaryText="Sign out" onTouchTap={() => this.props.logout()} />
    </IconMenu>;
      } else {
        loginButton = <FlatButton label="Login" onTouchTap={() => this.props.history.push('/login')}/>;
      }

      return (
          <AppBar
        className="top"
        title="IT Agent"
        iconElementLeft={<IconButton onTouchTap={() => this.props.history.push('/search')}><SearchIcon /></IconButton>}
        iconElementRight={loginButton}
          />
      );
    }
  }

  export default withRouter(Header);
