import React, {Component} from 'react';
import { withRouter } from 'react-router';

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconMessage from 'material-ui/svg-icons/communication/message';
import IconChat from 'material-ui/svg-icons/communication/business';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <IconMessage />;
const favoritesIcon = <IconChat />;
const nearbyIcon = <IconLocationOn />;
const urls = [
  '/',
  '/tools',
  '/me',
];

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {

  render() {
    const selectedIndex = urls.indexOf(this.props.location.pathname);

    return (
        <Paper zDepth={1}>
        <BottomNavigation selectedIndex={selectedIndex}>
        <BottomNavigationItem
      label="在线"
      icon={recentsIcon}
      onTouchTap={() => {this.props.router.push('/');}}
        />
        <BottomNavigationItem
      label="工具"
      icon={favoritesIcon}
      onTouchTap={() => {this.props.router.push('/tools');}}
        />
        <BottomNavigationItem
      label="我的"
      icon={nearbyIcon}
      onTouchTap={() => {this.props.router.push('/me');}}
        />
        </BottomNavigation>
        </Paper>
    );
  }
}

export default withRouter(BottomNavigationExampleSimple);
