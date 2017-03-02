import React, {Component} from 'react';
import { withRouter } from 'react-router';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import SearchIcon from 'material-ui/svg-icons/action/search';

class Header extends Component {
    getStyles() {
      return {
        top: {
          position: 'fixed',
          WebkitAppRegion: 'drag'
        }
      };
    }

    handleChange = (event, logged) => {
      this.setState({logged: logged});
    };

    render() {
      const styles = this.getStyles();
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
        loginButton = <FlatButton label="Login" onTouchTap={() => this.props.router.push('/login')}/>;
      }

      return (
          <AppBar
        style={styles.top}
        title="IT Agent"
        iconElementLeft={<IconButton onTouchTap={() => this.props.router.push('/search')}><SearchIcon /></IconButton>}
        iconElementRight={loginButton}
          />
      );
    }
  }

  export default withRouter(Header);
