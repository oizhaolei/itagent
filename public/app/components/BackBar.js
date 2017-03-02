import React, {Component} from 'react';
import { withRouter } from 'react-router';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

class SearchBar extends Component {
  getStyles() {
    return {
      top: {
        position: 'fixed',
      }
    };
  }

  state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  render() {
    const styles = this.getStyles();
    return (
        <AppBar
      style={styles.top}
      title="输入任意内容搜索"
      iconElementLeft={<IconButton onTouchTap={() => this.props.router.push('/')}><NavigationClose /></IconButton>}
        />
    );
  }
}

export default withRouter(SearchBar);
