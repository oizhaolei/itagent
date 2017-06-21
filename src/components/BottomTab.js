import React, {Component} from 'react';
import { withRouter } from 'react-router';

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconBusiness from 'material-ui/svg-icons/communication/business';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const favoritesIcon = <IconBusiness />;
const nearbyIcon = <IconLocationOn />;
const urls = [
    '/',
    '/me',
];

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomTab extends Component {

    render() {
        const selectedIndex = urls.indexOf(this.props.location.pathname);

        return (
            <Paper zDepth={1}>
              <BottomNavigation selectedIndex={selectedIndex}>
                <BottomNavigationItem
                    label="工具"
                    icon={favoritesIcon}
                    onTouchTap={() => {this.props.history.push('/');}}
                />
                <BottomNavigationItem
                    label="我的"
                    icon={nearbyIcon}
                    onTouchTap={() => {this.props.history.push('/me');}}
                />
              </BottomNavigation>
            </Paper>
        );
    }gg
}

export default withRouter(BottomTab);
