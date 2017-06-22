import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconBusiness from 'material-ui/svg-icons/communication/business';
import ActionFace from 'material-ui/svg-icons/action/face';

const favoritesIcon = <IconBusiness />;
const urls = [
    '/',
    '/me',
];

class BottomTab extends Component {

    render() {
        const selectedIndex = urls.indexOf(this.props.location.pathname);

        return (
            <Paper zDepth={1}>
              <BottomNavigation selectedIndex={selectedIndex}>
                <BottomNavigationItem
                    label="问题"
                    icon={favoritesIcon}
                    onTouchTap={() => {this.props.history.push('/');}}
                />
                <BottomNavigationItem
                    label="我"
                    icon={<ActionFace />}
                    onTouchTap={() => {this.props.history.push('/me');}}
                />
              </BottomNavigation>
            </Paper>
        );
    }
}

export default withRouter(BottomTab);
